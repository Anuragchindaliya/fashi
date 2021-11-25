import { searchProductsTypes } from "types";

const { FETCH, SUCCESS, ERROR, RESET, UPDATE_SEARCH_TERM } = searchProductsTypes;

const initialState = {
  data: [],
  loading: false,
  error: "",
  searchTerm: "",
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH:
      return { ...state, loading: true };
    case SUCCESS:
      return { data: payload, loading: false };
    case ERROR:
      return { ...state, error: payload };
    case RESET:
      return state;
    case UPDATE_SEARCH_TERM:
      return {...state, searchTerm: payload}
    default:
      return state;
  }
};
export default reducer;
