import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-nav sticky w-full z-[2000] flex items-center justify-between p-6 shadow-md">
      <NavLink
        to="/"
        className="font-extrabold hover:border-b hover:border-b-2 "
      >
        #VANLIFE
      </NavLink>
      <div className="flex gap-6 text-gray-700">
        <NavLink
          to="/host"
          className={({ isActive }) =>`${isActive ? "underline font-bold text-black" : ""} hover:border-b hover:border-b-2`}
        >
          Host
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold text-black" : ""
            } hover:border-b hover:border-b-2`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/vans"
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold text-black" : ""
            } hover:border-b hover:border-b-2`
          }
        >
          Vans
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
