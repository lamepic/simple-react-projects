import React from "react";
import { useForm } from "react-hook-form";

function NewTransaction() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <div className="space-y-5">
        <h1 className="border-b pb-2 border-gray-600 font-bold">
          Add new transaction
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2 text-sm">
            <label htmlFor="text" className="font-semibold">
              Text
            </label>
            <input
              type="text"
              {...register("text", { required: true })}
              className="w-full p-2 outline-none"
              placeholder="Enter text..."
            />
          </div>
          <div className="space-y-2 text-sm">
            <div className="font-semibold">
              <label htmlFor="text">Amount</label>
              <p>(negative-expense, positive-income)</p>
            </div>
            <input
              type="number"
              {...register("amount", { required: true })}
              className="w-full p-2 outline-none"
              placeholder="Enter amount..."
            />
          </div>
          <button className="text-white w-full p-2 bg-purple-500">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTransaction;
