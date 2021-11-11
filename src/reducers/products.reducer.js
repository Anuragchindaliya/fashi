import { productsTypes } from "types";
const {FETCH,SUCCESS,ERROR,RESET} = productsTypes;
const initialState = {
    data:[],
    loading:false,
    error:''
}
const reducer = (state = initialState, action) => {
    const {type, payload} = action;
   switch (type) {
      case FETCH: return {...state,loading:true}
      case SUCCESS: return {data:payload,loading:false,error:''}
      case ERROR: return {...state,loading:false, error:payload}
      case RESET: return {...initialState}
      default: return state
   }
}
export default reducer;