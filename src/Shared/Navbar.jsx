import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  const [isAdmin] = useAdmin();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive
            ? "no-underline"
            : isPending
            ? "pending"
            : "no-underline text-[#66451c]"
        }
      >
        <li className="group flex cursor-pointer flex-col">Home</li>
      </NavLink>
      <NavLink
        to="/biodatas"
        className={({ isActive, isPending }) =>
          isActive
            ? "no-underline"
            : isPending
            ? "pending"
            : "no-underline text-[#66451c]"
        }
      >
        <li className="group flex  cursor-pointer flex-col">Biodatas</li>
      </NavLink>
      <NavLink
        to="/aboutUs"
        className={({ isActive, isPending }) =>
          isActive
            ? "no-underline"
            : isPending
            ? "pending"
            : "no-underline text-[#66451c]"
        }
      >
        <li className="group flex  cursor-pointer flex-col">About Us</li>
      </NavLink>
      <NavLink
        to="/contactUs"
        className={({ isActive, isPending }) =>
          isActive
            ? "no-underline"
            : isPending
            ? "pending"
            : "no-underline text-[#66451c]"
        }
      >
        <li className="group flex  cursor-pointer flex-col">Contact Us</li>
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isActive
            ? "no-underline"
            : isPending
            ? "pending"
            : "no-underline text-[#66451c]"
        }
      >
        <li className="group flex  cursor-pointer flex-col">Login</li>
      </NavLink>
      {isAdmin ? (
        <NavLink
          to="/dashboard/adminDashboard"
          className={({ isActive, isPending }) =>
            isActive
              ? "no-underline"
              : isPending
              ? "pending"
              : "no-underline text-[#66451c]"
          }
        >
          <li className="group flex  cursor-pointer flex-col">Dashboard</li>
        </NavLink>
      ) : (
        <NavLink
          to="/dashboard/editBiodata"
          className={({ isActive, isPending }) =>
            isActive
              ? "no-underline"
              : isPending
              ? "pending"
              : "no-underline text-[#66451c]"
          }
        >
          <li className="group flex  cursor-pointer flex-col">Dashboard</li>
        </NavLink>
      )}
    </>
  );

  return (
    <nav className="flex items-center justify-between shadow-lg bg-white text-black px-4 -mx-2">
      <Link to="/">
        <div className="scale-100 cursor-pointer rounded-2xl text-xl font-semibold text-white transition-all duration-200 hover:scale-110 flex gap-2 items-center">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/q1X9Xhb/title-removebg-preview.png"
            alt=""
          />
          <h2 className="text-black">
            Match <span className="text-[#a16304]">Mingle</span>
          </h2>
        </div>
      </Link>
      <ul className="hidden items-center justify-between gap-10 lg:flex uppercase font-poppins font-semibold">
        {navLink}
      </ul>
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex transition-transform lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer"
        >
          {" "}
          <line x1="4" x2="20" y1="12" y2="12" />{" "}
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />{" "}
        </svg>
        {dropDownState && (
          <ul className="shadow-xl bg-white text-xl absolute right-0 top-11 flex w-[200px] flex-col rounded-lg z-10 font-poppins font-semibold uppercase py-4">
            {navLink}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
