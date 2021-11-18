import { favouriteProductTypes } from "types";
const { ADD_TO_FAV, REMOVE_FROM_FAV, RESET_FAV } = favouriteProductTypes;

export function addToFav(val) {
  return {
    type: ADD_TO_FAV,
    payload: val,
  };
}
export function removeFromFav(val) {
  return {
    type: REMOVE_FROM_FAV,
    payload: val,
  };
}
export function resetFav(val) {
  return {
    type: RESET_FAV,
    payload: val,
  };
}

export const favActions = {
  addToFav,
  removeFromFav,
  resetFav,
};
