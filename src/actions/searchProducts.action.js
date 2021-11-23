const { searchProductsTypes } = require("types");

const { FETCH, SUCCESS, ERROR, RESET } = searchProductsTypes;

const searchProductsFetch = () => {
  return {
    type: FETCH,
  };
};

const searchProductsSuccess = (val) => {
  return {
    type: SUCCESS,
    payload: val,
  };
};

const searchProductsError = (val) => {
  return {
    type: ERROR,
    payload: val,
  };
};

const searchProductsReset = () => {
  return {
    type: RESET,
  };
};

const searchProductActions = {
  searchProductsFetch,
  searchProductsSuccess,
  searchProductsError,
  searchProductsReset,
};
export default searchProductActions;
