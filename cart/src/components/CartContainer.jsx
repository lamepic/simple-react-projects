import React from "react";
import CartItem from "./CartItem";
import { useStateValue } from "../store/StateProvider";
import * as actionTypes from "../store/actionTypes";

function CartContainer() {
  const [{ products, totalAmount, totalProductsCount }, dispatch] =
    useStateValue();

  const clearCart = () => {
    dispatch({
      type: actionTypes.CLEAR_CART,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16 w-6/12 mx-auto">
      <h1 className="text-6xl">Your Bag</h1>

      {totalProductsCount == 0 ? (
        <p className="text-center text-3xl text-gray-500">is currently empty</p>
      ) : (
        <div className="w-full space-y-20">
          <div className="space-y-10">
            {products.map((product) => {
              return <CartItem product={product} key={product.id} />;
            })}
          </div>
          <div className="border-t border-gray-500 pt-5 flex flex-col items-center gap-5">
            <div className="flex items-center justify-between w-full">
              <p className="text-3xl">Total</p>
              <p className="text-2xl py-1 px-3 text-white rounded-md bg-indigo-500">
                ${totalAmount.toFixed(2)}
              </p>
            </div>
            <button
              className="mx-auto text-blue-600 bg-indigo-200 rounded-md px-3 py-1 hover:bg-indigo-300 duration-200"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
