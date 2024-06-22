import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyFavouritesBiodata = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: favoriteBio = [],
    isPending,
  } = useQuery({
    queryKey: ["favoriteBio"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/favoriteBioData/${user?.email}`);
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

  const handleDeleteFavoriteBio = (id) => {
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
        axiosSecure.delete(`/favoriteBioData/${id}`).then((res) => {
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
        <title>Match Mingle || MyFavoriteBiodata</title>
      </Helmet>
      <table className="min-w-full border border-gray-200 bg-white shadow-lg">
        {/* Table Header */}
        <thead>
          <tr className="h-[70px] border-b bg-[#141B29] font-poppins font-semibold text-[#66451c]">
            <th className="px-6 py-4 text-center">User BiodataID</th>
            <th className="px-6 py-4 text-center">User Name</th>
            <th className="px-6 py-4 text-center">User Occupation</th>
            <th className="px-6 py-4 text-center">User Permanent Division</th>
            <th className="px-6 py-4 text-center">Delete Biodata</th>
          </tr>
        </thead>

        <tbody>
          {/* Table rows */}
          {favoriteBio.map((favBio) => (
            <tr
              key={favBio._id}
              className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]"
            >
              <th className="px-6 py-4 text-center ">{favBio.bio.biodataId}</th>
              <th className="px-6 py-4 text-center ">{favBio.bio.name}</th>
              <th className="px-6 py-4 text-center ">
                {favBio.bio.occupation}
              </th>
              <th className="px-6 py-4 text-center">
                {favBio.bio.permanentDivision}
              </th>

              <th className="px-6 py-4 text-center">
                <button
                  onClick={() => handleDeleteFavoriteBio(favBio._id)}
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

export default MyFavouritesBiodata;
