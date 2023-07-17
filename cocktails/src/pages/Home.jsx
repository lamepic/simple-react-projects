import React from "react";
import SearchForm from "../components/SearchForm";
import Cocktail from "../components/Cocktail";
import { useStateValue } from "../store/StateProvider";

function Home() {
  const { cocktails, loading } = useStateValue();

  if (loading) {
    return <p className="text-5xl mt-28 text-center">Loading....</p>;
  }

  return (
    <div className="flex flex-col items-center gap-24 pb-20">
      <div className="mt-28 w-8/12 mx-auto">
        <SearchForm />
      </div>

      <div className="w-full ">
        {cocktails.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cocktails.map((cocktail) => {
              const {
                strDrinkThumb,
                strAlcoholic,
                strGlass,
                strDrink,
                idDrink,
              } = cocktail;

              return (
                <Cocktail
                  key={cocktail.idDrink}
                  cocktail={{
                    strDrinkThumb,
                    strAlcoholic,
                    strGlass,
                    strDrink,
                    idDrink,
                  }}
                />
              );
            })}
          </div>
        ) : (
          <p className="text-center text-4xl">No Matching Cocktails Found...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
