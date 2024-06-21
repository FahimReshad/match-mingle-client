import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdWorkspacePremium } from "react-icons/md";
import Swal from "sweetalert2";

const ApprovedPremium = () => {
  const axiosSecure = useAxiosSecure();
  const {refetch, data: biodata = [] } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosSecure.get("/biodata/premium/Requested", {withCredentials: true});
      console.log(res.data);
      return res.data;
    },
  });

  const handlePremiumBio = async (email) => {
    const response = await axiosSecure.patch(`/biodata/search/${email}`, {
      status: "Premium",
    });
    console.log(response.data);
    if (response.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success! Your biodata is premium now.",
        showConfirmButton: false,
        timer: 1500,
        
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your biodata already premium",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    refetch()
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white shadow-lg">
          {/* Table Header */}
          <thead>
            <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
              <th className="px-6 py-4 text-start">Biodata ID</th>
              <th className="px-6 py-4 text-start">User Name</th>
              <th className="px-6 py-4 text-start">Make Email</th>
              <th className="px-6 py-4 text-start">Make premium</th>
            </tr>
          </thead>

          <tbody>
            {/* Table rows */}
            {biodata.map((bio) => (
              <tr
                key={bio._id}
                className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]"
              >
                <th className="px-6 py-4 text-start ">{bio.biodataId}</th>
                <th className="px-6 py-4 text-start ">{bio.name}</th>
                <th className="px-6 py-4 text-start ">{bio.email}</th>

                <th className="px-6 py-4 text-start">
                  <button
                    onClick={() => handlePremiumBio(bio.email)}
                    className="flex items-center rounded-full bg-[#F2D184CC] px-4 py-2 font-bold text-black font-poppins shadow-md transition-all duration-300 hover:bg-blue-700 gap-2"
                  >
                    <MdWorkspacePremium />
                    Make Premium
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApprovedPremium;
