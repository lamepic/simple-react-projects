import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Profile from "./components/Profile";
import data from "./data";

function App() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextProfile();
    }, 3000);

    return () => clearInterval(interval);
  }, [active]);

  const nextProfile = () => {
    if (active >= data.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const prevProfile = () => {
    if (active <= 0) {
      setActive(data.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  return (
    <div className="w-7/12 mx-auto h-screen grid place-items-center">
      <div className="flex justify-between w-full items-center">
        <button
          className="bg-gray-700 rounded-md text-center"
          onClick={prevProfile}
        >
          <FaAngleLeft size={35} className="text-white" />
        </button>
        <div className="flex">
          {data.map((profile, idx) => {
            if (idx === active) {
              return <Profile key={profile.id} profile={data[active]} />;
            }
          })}
        </div>
        <button
          className="bg-gray-700 rounded-md text-center"
          onClick={nextProfile}
        >
          <FaAngleRight size={35} className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default App;
