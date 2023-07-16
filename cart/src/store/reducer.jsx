import * as actionTypes from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        products: [],
      };

    case actionTypes.INCREASE:
      const temp = state.products.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        products: temp,
      };

    case actionTypes.DECREASE:
      const tempCart = state.products
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount > 0);
      return {
        ...state,
        products: tempCart,
      };

    case actionTypes.GET_CART_TOTAL:
      return {
        ...state,
        totalProductsCount: state.products.reduce((total, current) => {
          return current.amount + total;
        }, 0),
        totalAmount: state.products.reduce((total, current) => {
          return current.price * current.amount + total;
        }, 0),
      };

    case actionTypes.REMOVE:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default reducer;
