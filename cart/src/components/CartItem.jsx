import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useStateValue } from "../store/StateProvider";
import * as actionTypes from "../store/actionTypes";

function CartItem({ product }) {
  const [state, dispatch] = useStateValue();

  const increase = () => {
    dispatch({
      type: actionTypes.INCREASE,
      payload: {
        id: product.id,
      },
    });
  };

  const decrease = () => {
    dispatch({
      type: actionTypes.DECREASE,
      payload: {
        id: product.id,
      },
    });
  };

  const remove = () => {
    dispatch({
      type: actionTypes.REMOVE,
      payload: {
        id: product.id,
      },
    });
  };
  return (
    <div className="flex w-full gap-5">
      <img src={product.img} className="h-24 w-24" />
      <div className="flex items-start justify-between flex-1">
        <div>
          <p className="text-2xl">{product.title}</p>
          <p className="text-gray-400">${product.price}</p>
          <button className="text-blue-500" onClick={remove}>
            remove
          </button>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <button onClick={increase}>
            <FaAngleUp size={25} />
          </button>
          <p>{product.amount}</p>
          <button onClick={decrease}>
            <FaAngleDown size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
