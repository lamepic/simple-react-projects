import React, { useState } from "react";
import data from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const nextReview = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevReview = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const randomize = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    if (randomIndex === index) {
      randomIndex += 1;
    }
    if (randomIndex > data.length - 1) {
      randomIndex = 0;
    }
    setIndex(randomIndex);
  };

  return (
    <div className="w-[620px] bg-white py-5 px-6 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center cursor-default space-y-5">
      <div className="rounded-full h-40 w-40 relative bg-indigo-500">
        <div className="bg-indigo-500 rounded-full p-3 h-10 w-10 absolute top-5 -left-4 z-10 flex flex-col items-center">
          <FaQuoteRight size={30} className="text-white" />
        </div>
        <img
          src={image}
          className="w-full h-full object-cover rounded-full absolute -bottom-1 -left-2"
        />
      </div>
      <div className="text-center space-y-1">
        <p className="text-3xl capitalize">{name}</p>
        <p className="uppercase text-indigo-600 text-sm font-semibold">{job}</p>
      </div>
      <p className="text-center text-gray-600">{text}</p>
      <div className="flex items-center text-indigo-800 gap-4">
        <button onClick={prevReview}>
          <FaChevronLeft size={22} className="cursor-pointer" />
        </button>
        <button onClick={nextReview}>
          <FaChevronRight size={22} className="cursor-pointer" />
        </button>
      </div>
      <button
        className="text-indigo-600 bg-indigo-200 rounded-md text-sm px-3 py-1"
        onClick={randomize}
      >
        Surprise me
      </button>
    </div>
  );
}

export default Review;
