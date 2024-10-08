import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyContactRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: payments = [],
    isPending,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  if (isPending) {
    return (
      <div className="w-10 h-10 mx-auto mt-10">
        <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
          <span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span>{" "}
          <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span>
          <span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span>
          <span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span>
        </div>
      </div>
    );
  }

  const handleDeleteApprovedRequest = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/payments/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Biodata deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Match Mingle || MyContactBiodata</title>
      </Helmet>
      <table className="min-w-full border border-gray-200 bg-white shadow-lg">
        {/* Table Header */}
        <thead>
          <tr className="h-[70px] border-b bg-[#141B29] font-poppins font-semibold text-[#66451c]">
            <th className="px-6 py-4 text-center">User BiodataID</th>
            <th className="px-6 py-4 text-center">User Name</th>
            <th className="px-6 py-4 text-center">Status</th>
            {payments.map((payment) => (
              <>
                {payment.status === "Approved" && (
                  <>
                    <th className="px-6 py-4 text-center">Mobile Number</th>
                    <th className="px-6 py-4 text-center">Email</th>
                  </>
                )}
              </>
            ))}
            <th className="px-6 py-4 text-center">Delete Biodata</th>
          </tr>
        </thead>

        <tbody>
          {/* Table rows */}
          {payments.map((payment) => (
            <tr
              key={payment._id}
              className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]"
            >
              <th className="px-6 py-4 text-center ">
                {payment.biodata.biodataId}
              </th>
              <th className="px-6 py-4 text-center ">{payment.biodata.name}</th>
              <th className="px-6 py-4 text-center ">{payment.status}</th>
              {payment.status === "Approved" ? (
                <>
                  <th className="px-6 py-4 text-center">
                    {payment.biodata.mobileNumber}
                  </th>
                  <th className="px-6 py-4 text-center">
                    {payment.biodata.email}
                  </th>
                </>
              ) : (
                <>
                  <th className="px-6 py-4 text-center">{""}</th>
                  <th className="px-6 py-4 text-center">{""}</th>
                </>
              )}

              <th className="px-6 py-4 text-center">
                <button
                  onClick={() => handleDeleteApprovedRequest(payment._id)}
                  className=" rounded-full bg-[#F2D184CC] px-4 py-2 font-bold text-black font-poppins shadow-md transition-all duration-300 hover:bg-blue-700 gap-2"
                >
                  <MdDelete className="text-xl" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyContactRequest;
