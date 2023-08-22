import { useState } from "react";
import Square from "./Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function GameBoard() {
  const [xIsNext, setXIsNext] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const temp = [...squares];
    if (xIsNext) {
      temp[i] = "X";
    } else {
      temp[i] = "O";
    }
    setSquares(temp);
    setXIsNext(!xIsNext);
  };
  return (
    <div className="w-4/12 h-4/6 border">
      <h1>{status}</h1>
      <div className="h-1/3 grid grid-cols-3">
        <Square
          value={squares[0]}
          handleClick={() => handleClick(0)}
          index={0}
        />
        <Square
          value={squares[1]}
          handleClick={() => handleClick(1)}
          index={1}
        />
        <Square
          value={squares[2]}
          handleClick={() => handleClick(2)}
          index={2}
        />
      </div>
      <div className="h-1/3 grid grid-cols-3">
        <Square
          value={squares[3]}
          handleClick={() => handleClick(3)}
          index={3}
        />
        <Square
          value={squares[4]}
          handleClick={() => handleClick(4)}
          index={4}
        />
        <Square
          value={squares[5]}
          handleClick={() => handleClick(5)}
          index={5}
        />
      </div>
      <div className="h-1/3 grid grid-cols-3">
        <Square
          value={squares[6]}
          handleClick={() => handleClick(6)}
          index={6}
        />
        <Square
          value={squares[7]}
          handleClick={() => handleClick(7)}
          index={7}
        />
        <Square
          value={squares[8]}
          handleClick={() => handleClick(8)}
          index={8}
        />
      </div>
    </div>
  );
}

export default GameBoard;
