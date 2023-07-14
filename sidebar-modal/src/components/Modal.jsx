import React from "react";

import { FaTimes } from "react-icons/fa";
import { useStateValue } from "../StateProvider/Index";

function Modal() {
  const state = useStateValue();

  return (
    <>
      <div
        className={`absolute top-0 left-0 h-full w-full bg-black/30 grid place-items-center ${
          !state.openModal ? "opacity-0 hidden" : "opacity-100"
        } transition-all duration-200`}
      >
        <div className="bg-white rounded-md w-5/12 h-72 p-5 flex flex-col gap-3 justify-center relative">
          <button
            onClick={() => state.handleOpenModal(false)}
            className="absolute right-5 top-5"
          >
            <FaTimes size={30} className="text-red-700" />
          </button>
          <div className="text-center">
            <p className="text-4xl">Modal Content</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
