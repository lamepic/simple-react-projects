import { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useStateValue } from "../store/StateProvider";
import * as actionTypes from "../store/actionTypes";

function Navbar() {
  const [{ products, totalProductsCount }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: actionTypes.GET_CART_TOTAL,
    });
  }, [products]);

  return (
    <div className="p-5 bg-blue-600">
      <div className="md:w-7/12 mx-auto flex items-center justify-between text-white">
        <p className="text-5xl">Cart</p>
        <div className="relative">
          <span className="rounded-full h-7 w-7 text-lg text-center bg-violet-500 absolute -right-4 -top-2">
            {totalProductsCount}
          </span>
          <FaCartPlus size={40} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
