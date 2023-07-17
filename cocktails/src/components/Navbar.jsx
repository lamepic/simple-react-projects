import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white p-6">
      <div className="w-8/12 flex items-center justify-between mx-auto">
        <p className="text-green-800 text-5xl font-bold">MixMaster</p>
        <div className="flex gap-8 text-xl">
          <Link to="/" className="hover:text-green-500 ">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-500 ">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
