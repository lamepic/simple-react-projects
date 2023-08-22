import React from "react";
import HistoryItem from "./HistoryItem";

function History() {
  return (
    <div className="space-y-5">
      <h1 className="border-b pb-2 border-gray-600 font-bold">History</h1>
      <div>
        <HistoryItem />
      </div>
    </div>
  );
}

export default History;
