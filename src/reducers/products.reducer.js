import { productsTypes } from "types";
const {PRODUCTS_FETCH,PRODUCTS_SUCCESS,PRODUCTS_ERROR,PRODUCTS_RESET} = productsTypes;
const initialState = {
    data:[],
    loading:false,
    error:''
}
const reducer = (state = initialState, action) => {
    const {type, payload} = action;
   switch (type) {
      case PRODUCTS_FETCH: return {...state,loading:true}
      case PRODUCTS_SUCCESS: return {data:payload,loading:false,error:''}
      case PRODUCTS_ERROR: return {...state,loading:false, error:payload}
      case PRODUCTS_RESET: return {...initialState}
      default: return state
   }
}
export default reducer;