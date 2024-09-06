import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiAdminFill } from "react-icons/ri";
import { MdWorkspacePremium } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {withCredentials: true});
      return res.data;
    },
  });
  const handleAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }else {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is a admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
  };

  const handlePremium = (user) => {
    axiosSecure.patch(`/users/premium/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is a premium member now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }else{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is already a premium member`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Match Mingle || ManageUsers</title>
      </Helmet>
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
          {users.map((user) => (
            <tr
              key={user._id}
              className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]"
            >
              <th className="px-6 py-4 text-start ">{user.name}</th>
              <th className="px-6 py-4 text-start ">{user.email}</th>
              {user.role === "admin" ? (
                <th className="px-6 py-4 text-start">
                  <button className="flex items-center rounded-full bg-[#66451c] px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700 gap-2">
                    <GrUserAdmin />
                    Admin
                  </button>
                </th>
              ) : (
                <th className="px-6 py-4 text-start">
                  <button
                    onClick={() => handleAdmin(user)}
                    className="flex items-center rounded-full bg-[#66451c] px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700 gap-2 hover:cursor-pointer"
                  >
                    <RiAdminFill />
                    Make Admin
                  </button>
                </th>
              )}

              <th className="px-6 py-4 text-start">
                <button onClick={() => handlePremium(user)} className="flex items-center rounded-full bg-[#F2D184CC] px-4 py-2 font-bold text-black font-poppins shadow-md transition-all duration-300 hover:bg-blue-700 gap-2">
                  <MdWorkspacePremium />
                  Make Premium
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
