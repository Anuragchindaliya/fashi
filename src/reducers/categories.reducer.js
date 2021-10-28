import { categoriesTypes } from "types";
const {CATEGORIES_FETCH,CATEGORIES_SUCCESS,CATEGORIES_ERROR,CATEGORIES_RESET} = categoriesTypes;
const initialState = {
    data:[],
    loading:false,
    error:''
}
const reducer = (state = initialState, action) => {
    const {type, payload} = action;
   switch (type) {
      case CATEGORIES_FETCH: return {...state,loading:true}
      case CATEGORIES_SUCCESS: return {data:payload,loading:false,error:''}
      case CATEGORIES_ERROR: return {...state,loading:false, error:payload}
      case CATEGORIES_RESET: return {...initialState}
      default: return state
   }
}
export default reducer;