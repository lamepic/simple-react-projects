import React from "react";
import { FaBars } from "react-icons/fa";
import { useStateValue } from "../StateProvider/Index";

function Home() {
  const state = useStateValue();

  return (
    <div className="py-5 px-8 h-screen">
      <button onClick={() => state.handleOpenSidebar(true)}>
        <FaBars className="text-blue-800" size={45} />
      </button>
      <div className="grid place-items-center h-5/6">
        <button
          className="bg-blue-500 px-5 py-1 rounded-md text-white"
          onClick={() => state.handleOpenModal(true)}
        >
          Show Modal
        </button>
      </div>
    </div>
  );
}

export default Home;
