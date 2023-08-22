import React from "react";
import { useStateValue } from "../store";

function IncomeExpense() {
  const [state, dispatch] = useStateValue();

  const expense = state.transactions
    .map((trans) => parseFloat(trans.amount))
    .filter((trans) => trans < 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  const income = state.transactions
    .map((trans) => parseFloat(trans.amount))
    .filter((trans) => trans > 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  return (
    <div>
      <div className="bg-white shadow-md p-6 flex items-center justify-center">
        <div className="text-center px-16 border-r">
          <p className="uppercase text-sm">Income</p>
          <p className="text-green-500 font-bold">${income}</p>
        </div>

        <div className="text-center px-16">
          <p className="uppercase text-sm">Expense</p>
          <p className="text-red-500 font-bold">${expense}</p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpense;
