import * as actionTypes from "../store/actionTypes";

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case actionTypes.DELETE_TRANSACTION:
      const temp = state.transactions.filter(
        (transaction) => transaction.id !== action.payload.id
      );
      return {
        ...state,
        transactions: temp,
      };
    default:
      return state;
  }
}
