import React from "react";
import HistoryItem from "./HistoryItem";
import { useStateValue } from "../store";

function History() {
  const [{ transactions }, dispatch] = useStateValue();

  return (
    <div className="space-y-5">
      <h1 className="border-b pb-2 border-gray-600 font-bold">History</h1>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <HistoryItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

export default History;
