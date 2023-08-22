import { useState } from "react";
import GameBoard from "./components/GameBoard";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  return (
    <div className="h-screen flex items-center justify-center gap-10">
      <GameBoard />
      {/* <div className="">history</div> */}
    </div>
  );
}

export default App;
