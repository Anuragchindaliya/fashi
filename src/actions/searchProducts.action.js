const { searchProductsTypes } = require("types");

const { FETCH, SUCCESS, ERROR, RESET, UPDATE_SEARCH_TERM } = searchProductsTypes;

export const searchProductsFetch = (val) => {
  return {
    type: FETCH,
    payload: val
  };
};

export const searchProductsSuccess = (val) => {
  return {
    type: SUCCESS,
    payload: val,
  };
};

export const searchProductsError = (val) => {
  return {
    type: ERROR,
    payload: val,
  };
};

export const searchProductsReset = () => {
  return {
    type: RESET,
  };
};

export const updateSearchTerm = (val) => {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: val
  };
};

const searchProductsActions = {
  searchProductsFetch,
  searchProductsSuccess,
  searchProductsError,
  searchProductsReset,
  updateSearchTerm
};
export default searchProductsActions;
