import React, { useState } from "react";
import { useStateValue } from "../store";
import * as actionTypes from "../store/actionTypes";

function HistoryItem({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const [state, dispatch] = useStateValue();

  const handleDelete = () => {
    dispatch({
      type: actionTypes.DELETE_TRANSACTION,
      payload: {
        id: transaction.id,
      },
    });
  };

  return (
    <div className="relative group">
      <button
        onClick={handleDelete}
        className="group-hover:opacity-100 opacity-0 bg-red-500 p-3 absolute -left-9 transition-all duration-300"
      >
        X
      </button>
      <div
        className={`flex flex-1 items-center justify-between p-3 border-r-4 capitalize ${
          transaction.amount < 0 ? "border-red-500" : "border-green-500"
        }  bg-white shadow-md`}
      >
        <p>{transaction.text}</p>
        <p>
          {sign}${Math.abs(transaction.amount)}
        </p>
      </div>
    </div>
  );
}

export default HistoryItem;
