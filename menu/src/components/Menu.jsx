import React from "react";

function Menu({ handleFilter, data }) {
  return (
    <div className="flex items-center gap-5">
      <button
        className="bg-orange-400 text-white px-4 py-1 rounded-md hover:bg-red-900 duration-200 capitalize"
        onClick={() => handleFilter("all")}
      >
        All
      </button>
      {data.map((item) => {
        return (
          <button
            className="bg-orange-400 text-white px-4 py-1 rounded-md hover:bg-red-900 duration-200 capitalize"
            onClick={() => handleFilter(item)}
            key={item}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Menu;
