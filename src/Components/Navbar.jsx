import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSidebarVisibility } from "../Context/SidebarVisibilityContext";
import { useCategory } from "../Context/CategoryContext";

const Navbar = () => {
  const { sidebarVisibility, toggleSidebarVisibility } = useSidebarVisibility();
  const { category, changeCategory } = useCategory();
  return (
    <div className="text-zinc-700 flex py-4 px-4 sm:px-12 justify-between items-center bg-neutral-300 text-xl font-medium">
      <div className="flex items-center gap-4">
        {!sidebarVisibility ? (
          <GiHamburgerMenu onClick={toggleSidebarVisibility} />
        ) : (
          ""
        )}
        <h1 className="">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
      </div>
      <div>
        <ul className="flex gap-4 md:gap-8">
          <li className="flex items-center">
            <CiSearch />
          </li>
          <li className="flex items-center">
            <FaToggleOff />
          </li>
          <li className="flex items-center">
            <button className="bg-zinc-600 text-zinc-100 text-sm px-4 py-1 rounded-md">
              Add Note
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
