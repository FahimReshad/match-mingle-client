import { keepPreviousData, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdWorkspacePremium } from "react-icons/md";
import usePremium from "../../../Hooks/usePremium";
import { key } from "localforage";

const ApprovedPremium = () => {
  const axiosSecure = useAxiosSecure();
  const { data: biodata = [] } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosSecure.get("/biodata/premium/Requested");
      console.log(res.data);
      return res.data;
    },
  });
  console.log(biodata);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white shadow-lg">
          {/* Table Header */}
          <thead>
            <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
              <th className="px-6 py-4 text-start">User Name</th>
              <th className="px-6 py-4 text-start">User Email</th>
              <th className="px-6 py-4 text-start">Make admin</th>
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
                <th className="px-6 py-4 text-start ">{bio.name}</th>
                <th className="px-6 py-4 text-start ">{bio.email}</th>
                <th className="px-6 py-4 text-start ">{bio.status}</th>

                <th className="px-6 py-4 text-start">
                  <button className="flex items-center rounded-full bg-[#F2D184CC] px-4 py-2 font-bold text-black font-poppins shadow-md transition-all duration-300 hover:bg-blue-700 gap-2">
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
