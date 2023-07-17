import React, { useCallback, useEffect, useState } from "react";

const AppContext = React.createContext(null);

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const StateProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      if (data.drinks) {
        setCocktails(data.drinks);
      } else {
        setCocktails([]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm, fetchCocktails]);

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStateValue = () => React.useContext(AppContext);
