import { useEffect, useState } from "react";
import TourCard from "./TourCard";

const url = "https://course-api.com/react-tours-project";

function Tours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length == 0) {
    return (
      <div className="grid place-items-center gap-8">
        <p className="text-5xl">No Tours Left</p>
        <button
          className="bg-green-600 text-white rounded-md px-3 py-1"
          onClick={() => fetchTours()}
        >
          Refresh
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <main>
        <p className="text-center text-4xl">Loading...</p>
      </main>
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center pb-3">Our Tours</h1>
        <div className="w-32 h-2 bg-blue-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tours.map((tour) => {
          return <TourCard tour={tour} key={tour.id} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
