import React, { useEffect, useState } from "react";
import paginate from "../../utils/paginate";

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      setData(paginate(result))
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return { loading, data };
}

export default useFetch;
