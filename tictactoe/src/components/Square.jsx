import React, { useState } from "react";

function Square({ value, handleClick, index }) {
  return (
    <button
      className="w-full h-full border cursor-pointer grid place-items-center uppercase font-bold text-2xl"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default Square;
