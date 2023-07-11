import React from "react";

function Card({ data }) {
  return (
    <div>
      <div className="rounded-sm overflow-hidden h-[280px]">
        <img src={data.img} alt="food" className="w-full h-full object-cover" />
      </div>
      <div className="bg-white p-5 pt-12 space-y-5">
        <div className="flex items-start justify-between">
          <p className="capitalize font-semibold text-2xl">{data.title}</p>
          <p className="bg-orange-400 text-white px-3 py-1 rounded-md">
            $ {data.price}
          </p>
        </div>
        <p className="text-gray-500 text-lg leading-8">{data.desc}</p>
      </div>
    </div>
  );
}

export default Card;
