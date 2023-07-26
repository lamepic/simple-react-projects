import { useEffect, useState } from "react";
import FollowerCard from "./components/FollowerCard";
import useFetch from "./hooks/useFetch";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

function App() {
  const { loading, data } = useFetch(url);
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [page, loading]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 gap-2">
        <h1 className="text-6xl">Loading...</h1>
      </div>
    );
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const gotoPage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20 gap-2">
        <h1 className="text-6xl">Pagination</h1>
        <div className="border-2 border-blue-400 w-28"></div>
      </div>

      <div className="w-10/12 mx-auto mt-20 gap-10">
        <div className="grid grid-cols-4 gap-10">
          {followers.map((item) => {
            return <FollowerCard key={item.id} data={item} />;
          })}
        </div>
        <div className="flex items-center gap-10 mt-20 mx-auto justify-center mb-20">
          <button onClick={prevPage}>Prev</button>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`bg-blue-400 px-4 py-2 rounded-md text-white ${
                  page === index && "bg-blue-700"
                }`}
                onClick={() => gotoPage(index)}
              >
                {index + 1}
              </button>
            );
          })}

          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
