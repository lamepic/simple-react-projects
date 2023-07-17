import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        setCocktail(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktail();
  }, []);

  if (loading) {
    return <p className="text-center mt-20 text-5xl">Loading...</p>;
  }

  return (
    <div className="mt-28 flex flex-col items-center gap-5">
      <Link to="/" className="bg-green-600 text-white rounded-md px-4 py-1">
        Back Home
      </Link>
      <p className="text-4xl">GG</p>
      <div className="flex items-center gap-10 mt-10 w-full">
        <img
          src={cocktail.strDrinkThumb}
          className="w-[27rem] h-[26rem] object-cover rounded-md"
        />
        <div className="space-y-8 font-bold">
          <p className="space-x-2">
            <span className="text-gray-200 font-bold bg-green-700 rounded-md px-3 py-2">
              Name:
            </span>
            <span>{cocktail.strDrink}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-200 font-bold bg-green-700 rounded-md px-3 py-2">
              Category:
            </span>
            <span>{cocktail.strCategory}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-200 font-bold bg-green-700 rounded-md px-3 py-2">
              Info:
            </span>
            <span>{cocktail.strAlcoholic}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-200 font-bold bg-green-700 rounded-md px-3 py-2">
              Glass:
            </span>
            <span>{cocktail.strGlass}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-200 font-bold bg-green-700 rounded-md px-3 py-2">
              Ingredients:
            </span>
            <span>{`${cocktail.strIngredient1}, ${cocktail.strIngredient2}, ${cocktail.strIngredient3}`}</span>
          </p>
          <p className="space-x-2 leading-8">
            <span className="text-gray-200 font-bold bg-green-700 rounded-md px-3 py-2">
              Instructions:
            </span>
            <span className="mt-2">{cocktail.strInstructions}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleCocktail;
