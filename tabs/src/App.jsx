import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function App() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://course-api.com/react-tabs-project");
      const result = await res.json();
      setData(result);
      setActiveTab(result[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-9/12 mx-auto mt-24">
      {!loading ? (
        <div className="flex gap-20">
          <div className="flex flex-col gap-10 w-2/12">
            {data.map((item) => {
              return (
                <button
                  key={item.id}
                  className={`hover:border-l-2 border-teal-500 hover:text-teal-500 outline-teal-500 duration-200 ${
                    activeTab.order == item.order && "text-teal-500 border-l-2"
                  }`}
                  onClick={() => setActiveTab(item)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div className="space-y-5 w-full">
            <p className="text-5xl">{activeTab.title}</p>
            <p className="bg-gray-400 rounded-sm px-4 py-1 w-fit">
              {activeTab.company}
            </p>
            <p className="text-gray-500 text-lg">{activeTab.dates}</p>
            <div className="flex flex-col gap-5">
              {activeTab.duties.map((duty, idx) => {
                return (
                  <div key={idx} className="flex items-center gap-10">
                    <FaAngleDoubleRight size={20} className="text-teal-600" />
                    <span className="text-lg">{duty}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-5xl">Loading....</p>
      )}
    </div>
  );
}

export default App;
