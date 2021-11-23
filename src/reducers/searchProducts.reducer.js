import { searchProductsTypes } from "types";

const { FETCH, SUCCESS, ERROR, RESET } = searchProductsTypes;

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
    default:
      return state;
  }
};
export default reducer;
