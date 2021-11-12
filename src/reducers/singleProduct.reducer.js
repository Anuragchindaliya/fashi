import { singleProductTypes } from "types";
const {FETCH,SUCCESS,ERROR,RESET} = singleProductTypes;
const initialState = {
    data:[],
    loading:false,
    error:'',
    slug:''
}
const reducer = (state = initialState, action) => {
    const {type, payload} = action;
   switch (type) {
      case FETCH: return {...state,loading:true,slug:payload}
      case SUCCESS: return {data:payload,loading:false,error:'',slug:''}
      case ERROR: return {...state,loading:false, error:payload,slug:''}
      case RESET: return {...initialState}
      default: return state
   }
}
export default reducer;