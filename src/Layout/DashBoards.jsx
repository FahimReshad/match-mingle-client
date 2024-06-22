import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdGridView, MdOutlineFavorite } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { FaCheckDouble } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import Footer from "../Shared/Footer";

const DashBoards = () => {
  const navigate = useNavigate();
  const [isAdmin, isPending] = useAdmin();
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };
  if(isPending){
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
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-4 min-h-[calc(100vh-600px)]">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="h-full lg:w-80 bg-[#F2D184CC] rounded-lg ">
            <ul className="menu uppercase space-y-4">
              {isAdmin ? (
                <>
                  <li className="list-none">
                    <NavLink
                      to="/dashboard/adminDashboard"
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "no-underline space-x-2 font-bold font-poppins"
                          : isPending
                          ? "pending"
                          : "no-underline text-[#66451c] space-x-2 font-bold font-poppins"
                      }
                    >
                      <FaEdit />
                      <span>Admin Dashboard</span>
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink
                      to="/dashboard/manage"
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "no-underline space-x-2 font-bold font-poppins"
                          : isPending
                          ? "pending"
                          : "no-underline text-[#66451c] space-x-2 font-bold font-poppins"
                      }
                    >
                      <MdGridView />
                      <span>Manage Users</span>
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink
                      to="/dashboard/approvedPremium"
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "no-underline space-x-2 font-bold font-poppins"
                          : isPending
                          ? "pending"
                          : "no-underline text-[#66451c] space-x-2 font-bold font-poppins"
                      }
                    >
                      <BiSolidContact />
                      <span>Approved Premium</span>
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink
                      to="/dashboard/approvedContactRequest"
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "no-underline space-x-2 font-bold font-poppins"
                          : isPending
                          ? "pending"
                          : "no-underline text-[#66451c] space-x-2 font-bold font-poppins"
                      }
                    >
                      <MdOutlineFavorite />
                      <span>Approved contact request </span>
                    </NavLink>
                  </li>
                  <li className="no-underline text-[#66451c] space-x-2 font-bold font-poppins list-none ">
                    <TbLogout />
                    <span
                      onClick={handleLogOut}
                      className="hover:cursor-pointer"
                    >
                      logout
                    </span>
                  </li>{" "}
                </>
              ) : (
                <>
                  <li className="list-none">
                    <NavLink
                      to="/dashboard/editBiodata"
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "no-underline space-x-2 font-bold font-poppins"
                          : isPending
                          ? "pending"
                          : "no-underline text-[#66451c] space-x-2 font-bold font-poppins"
                      }
                    >
                      <FaEdit />
                      <span>Edit Biodata</span>
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink
                      to="/dashboard/viewBiodata"
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "no-underline space-x-2 font-bold font-poppins"
                          : isPending
                          ? "pending"
                          : "no-underline text-[#66451c] space-x-2 font-bold font-poppins"
                      }
                    >
                      <MdGridView />
                      <span>view biodata</span>
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink
                      to="/dashboard/myContactBiodata"
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "no-underline space-x-2 font-bold font-poppins"
                          : isPending
                          ? "pending"
                          : "no-underline text-[#66451c] space-x-2 font-bold font-poppins"
                      }
                    >
                      <BiSolidContact />
                      <span>my contact biodata</span>
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink
                      to="/dashboard/favoriteBiodata"
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "no-underline space-x-2 font-bold font-poppins"
                          : isPending
                          ? "pending"
                          : "no-underline text-[#66451c] space-x-2 font-bold font-poppins"
                      }
                    >
                      <MdOutlineFavorite />
                      <span>My Favorite Biodata</span>
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink
                      to="/dashboard/gotMarried"
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "no-underline space-x-2 font-bold font-poppins"
                          : isPending
                          ? "pending"
                          : "no-underline text-[#66451c] space-x-2 font-bold font-poppins"
                      }
                    >
                      <FaCheckDouble />
                      <span>Got Married</span>
                    </NavLink>
                  </li>
                  <li className="no-underline text-[#66451c] space-x-2 font-bold font-poppins list-none ">
                    <TbLogout />
                    <span
                      onClick={handleLogOut}
                      className="hover:cursor-pointer"
                    >
                      logout
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex-1 h-auto">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashBoards;
