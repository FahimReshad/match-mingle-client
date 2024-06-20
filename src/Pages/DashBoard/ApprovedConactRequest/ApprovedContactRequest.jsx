import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdWorkspacePremium } from "react-icons/md";
import Swal from "sweetalert2";

const ApprovedContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: payments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  const handleApprovedContactRequest = async(email) => {
    const response = await axiosSecure.patch(`/payments/${email}`, {
        status: "Approved",
      });
      console.log(response.data);
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Success! Approved Your Contact Request now.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Contact request already approved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 bg-white shadow-lg">
        {/* Table Header */}
        <thead>
          <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
            <th className="px-6 py-4 text-start">Biodata ID</th>
            <th className="px-6 py-4 text-start">User Name</th>
            <th className="px-6 py-4 text-start">User Email</th>
            <th className="px-6 py-4 text-start">Approved contact request</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment._id}
              className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]"
            >
              <td className="px-6 py-4 text-start">
                {payment.biodata.biodataId}
              </td>
              <td className="px-6 py-4 text-start">{payment.biodata.name}</td>
              <td className="px-6 py-4 text-start">{payment?.email}</td>
              <td className="px-6 py-4 text-start">
                <button
                onClick={() => handleApprovedContactRequest(payment?.email)}
                 className="flex items-center rounded-full bg-[#F2D184CC] px-4 py-2 font-bold text-black font-poppins shadow-md transition-all duration-300 hover:bg-blue-700 gap-2">
                  <MdWorkspacePremium />
                  Approved Contact Request
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedContactRequest;
