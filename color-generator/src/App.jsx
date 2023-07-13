import { useState } from "react";
import Color from "./components/Color";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [userInput, setUserInput] = useState("");
  const [colors, setColors] = useState(new Values("orange").all());
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    try {
      setError(false);
      const newColors = new Values(userInput);
      setColors(newColors.all());
    } catch (error) {
      setError(true);
      toast(`Cannot parse color ${userInput}`);
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <div className="p-20 flex items-center gap-14">
        <p className="text-3xl">Color Generator</p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="#e5e5e5"
            name="color"
            className={`p-3 bg-white rounded-sm w-96 ${
              error && "border border-red-600"
            }`}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="py-3 px-5 bg-blue-700 text-white rounded-sm"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-6">
        {colors.map((color, idx) => {
          return <Color key={idx} color={color} index={idx} />;
        })}
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
}

export default App;
