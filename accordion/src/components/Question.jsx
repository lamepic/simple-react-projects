import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ question }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="shadow-lg w-full p-5 px-7 border-2 rounded-md duration-500">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <p className="text-2xl">{question.title}</p>
          <button
            className="rounded-full bg-[#154F63] h-8 w-8 flex flex-col items-center justify-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <AiOutlineMinus className="text-white" />
            ) : (
              <AiOutlinePlus className="text-white" />
            )}
          </button>
        </div>
        {toggle && (
          <div className="leading-8 text-[#64758B]">{question.info}</div>
        )}
      </div>
    </div>
  );
}

export default Question;
