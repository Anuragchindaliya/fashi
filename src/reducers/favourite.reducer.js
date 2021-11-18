// const state = [];
import { favouriteProductTypes } from "types";
const { ADD_TO_FAV, REMOVE_FROM_FAV, RESET_FAV } = favouriteProductTypes;
const state = localStorage.getItem("fav")
  ? JSON.parse(localStorage.getItem("fav"))
  : [];
const intialState = state;
const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_FAV: {
      return [...state, payload];
    }
    case REMOVE_FROM_FAV: {
      return [...state].filter((id) => id !== payload);
    }
    case RESET_FAV: {
      return [];
    }
    default:
      return state;
  }
};
export default reducer;
