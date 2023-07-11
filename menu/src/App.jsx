import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import foodData from "./data";

function App() {
  const [data, setData] = useState(foodData);

  const handleFilter = (category) => {
    if (category === "all") {
      setData(foodData);
    } else {
      const newData = foodData.filter((item) => item.category == category);
      setData(newData);
    }
  };

  return (
    <main className="w-9/12 md:w-11/12 mx-auto grid place-items-center pb-20">
      <div className="flex flex-col items-center gap-10">
        <div className="mt-20 flex flex-col items-center gap-6">
          <h1 className="text-5xl">Our Menu</h1>
          <div className="border-2 border-orange-400 w-8/12"></div>
        </div>
        <div>
          <Menu
            handleFilter={handleFilter}
            data={Array.from(new Set(foodData.map((item) => item.category)))}
          />
        </div>
      </div>

      <div className="mt-20 w-full">
        <Categories data={data} />
      </div>
    </main>
  );
}

export default App;
