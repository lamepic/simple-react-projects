import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);

  const generate = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }

    if (count > 8) {
      amount = 8;
    }
    setParagraphs(data.slice(0, amount));
  };

  return (
    <div className="w-6/12 mx-auto pb-10">
      <div className="mt-28 flex flex-col items-center gap-7">
        <p className="text-4xl uppercase">Tired of Boring Lorem Ipsum?</p>
        <form className="flex items-center gap-5 justify-center">
          <p className="text-2xl">Paragraphs:</p>
          <input
            type="number"
            value={count}
            name="count"
            className="w-1/6 bg-gray-300 rounded-sm p-2 text-xl"
            onChange={(e) => setCount(e.target.value)}
          />
          <button
            className="text-white bg-green-700 rounded-md px-4 py-2"
            onClick={generate}
          >
            Generate
          </button>
        </form>
      </div>
      <div className="mt-20 text-lg leading-9 text-gray-700 space-y-5">
        {paragraphs.map((paragraph, idx) => {
          return <p key={idx}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
