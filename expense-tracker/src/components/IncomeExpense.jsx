import React from "react";

function IncomeExpense() {
  return (
    <div>
      <div className="bg-white shadow-md p-6 flex items-center justify-center">
        <div className="text-center px-16 border-r">
          <p className="uppercase text-sm">Income</p>
          <p className="text-green-500 font-bold">$500.00</p>
        </div>

        <div className="text-center px-16">
          <p className="uppercase text-sm">Expense</p>
          <p className="text-red-500 font-bold">$500.00</p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpense;
