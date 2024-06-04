import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdGridView, MdOutlineFavorite } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";

const DashBoards = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" container mx-auto">
        <div className="flex flex-col lg:flex-row -mt-14 lg:container mx-auto">
          <div className="h-full lg:w-80 bg-[#F2D184CC] rounded-lg ">
            <ul className="menu uppercase space-y-4">
              <li className="list-none">
                <NavLink to="/dashboard/adminHome" className="no-underline">
                  <h4>home</h4>
                </NavLink>
              </li>
              <li className="list-none">
                <NavLink to="/dashboard/AddItems" className="no-underline">
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">Manage items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">All users</NavLink>
              </li>
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
                  to="/dashboard/userHome"
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
                  to="/dashboard/userHome"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "no-underline space-x-2 font-bold font-poppins"
                      : isPending
                      ? "pending"
                      : "no-underline text-[#66451c] space-x-2 font-bold font-poppins"
                  }
                >
                  <MdOutlineFavorite />
                  <span>favourite biodata</span>
                </NavLink>
              </li>
              <li className="list-none">
                <NavLink
                  to="/dashboard/userHome"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "no-underline space-x-2 font-bold font-poppins"
                      : isPending
                      ? "pending"
                      : "no-underline text-[#66451c] space-x-2 font-bold font-poppins"
                  }
                >
                  <TbLogout />
                  <span>logout</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoards;
