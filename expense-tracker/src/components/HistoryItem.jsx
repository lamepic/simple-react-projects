import React from "react";

function HistoryItem() {
  return (
    <div className="relative group cursor-pointer ">
      <button className="group-hover:opacity-100 opacity-0 bg-red-500 p-3 absolute -left-9 transition-all duration-300">
        X
      </button>
      <div className="flex flex-1 items-center justify-between p-3 border-r-4 border-green-500 bg-white shadow-md">
        <p>Cash</p>
        <p>+500</p>
      </div>
    </div>
  );
}

export default HistoryItem;
