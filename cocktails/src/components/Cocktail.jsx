import React from "react";
import { Link } from "react-router-dom";

function Cocktail({ cocktail }) {
  return (
    <div className="rounded-md overflow-hidden">
      <img
        src={cocktail.strDrinkThumb}
        className="w-[28rem] h-60 object-cover"
      />
      <div className="bg-white p-5 space-y-2">
        <p className="font-bold text-2xl">{cocktail.strDrink}</p>
        <div>
          <p className="text-2xl">{cocktail.strGlass}</p>
          <p className="text-gray-400">{cocktail.strAlcoholic}</p>
        </div>
        <p>
          <Link
            to={`/cocktail/${cocktail.idDrink}`}
            className="bg-green-600 text-white py-1 px-3 rounded-md"
          >
            Details
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Cocktail;
