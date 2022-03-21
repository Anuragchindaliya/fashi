import { accountTypes } from "types";

const initialState = { data: null, loading: false, error: null };
const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case accountTypes.FETCH:
      return { ...state, loading: true };
    case accountTypes.SUCCESS:
      const { data } = payload;
      return { ...state, loading: false, data };
    case accountTypes.ERROR:
      const { error } = payload;
      return { ...state, data: null, loading: false, error };
    case accountTypes.RESET:
      return initialState;
    default:
      return state;
  }
};
export default reducer;
