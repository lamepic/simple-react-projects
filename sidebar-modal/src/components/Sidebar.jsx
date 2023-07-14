import React from "react";
import { useStateValue } from "../StateProvider/Index";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
  const state = useStateValue();

  return (
    <div
      className={`absolute h-full left-0 top-0 w-[28%] bg-white p-5 space-y-10 transition-all duration-200 ease-linear ${
        state.openSideBar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-4xl text-blue-800">Logo</p>
        <button
          onClick={() => state.handleOpenSidebar(false)}
          className="absolute right-5 top-5"
        >
          <FaTimes size={30} className="text-red-700" />
        </button>
      </div>
      <div className="text-3xl">Menu Items</div>
    </div>
  );
}

export default Sidebar;
