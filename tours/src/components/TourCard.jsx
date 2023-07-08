import React, { useState } from "react";

function TourCard({ tour, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="w-full">
      <div className="h-80 rounded-t-md overflow-hidden relative">
        <p className="absolute right-0 px-3 py-2 bg-green-600 text-white text-lg">
          $ {tour.price}
        </p>
        <img src={tour.image} className="h-full w-full object-cover" />
      </div>
      <div className="bg-white p-8 border shadow-sm hover:shadow-md transition-shadow duration-200 rounded-b-md space-y-5">
        <p className="text-2xl font-semibold text-center">{tour.name}</p>
        <div>
          <p className="text-gray-500">
            {readMore ? tour.info : `${tour.info.substring(0, 150)}...`}
          </p>
          <button
            className="text-green-500 font-bold text-sm mt-1"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </div>
        <button
          onClick={() => removeTour(tour.id)}
          className="border border-green-300 rounded-md w-full py-2 text-green-500 hover:bg-green-400 hover:text-white duration-200"
        >
          Not interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;
