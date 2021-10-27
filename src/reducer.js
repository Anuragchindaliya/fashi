import {productTypes, categoryTypes} from './types';
const {PRODUCTS_FETCH,PRODUCTS_SUCCESS,PRODUCTS_ERROR,PRODUCTS_RESET} = productTypes;
const {CATEGORIES_FETCH,CATEGORIES_SUCCESS,CATEGORIES_ERROR,CATEGORIES_RESET} = categoryTypes;
const initialState = {
    products: {
        data:[],
        loading:false,
        error:''
    },
    categories: {
        data:[],
        loading:false,
        error:''
    }
}
const reducer = (state = initialState, action) => {
    const {type, payload} = action;
   switch (type) {

      case PRODUCTS_FETCH: return {...state, products: {...state.products,loading:true}}
      case PRODUCTS_SUCCESS: return {...state, products: {data:payload,loading:false,error:''}}
      case PRODUCTS_ERROR: return {...state, products:{...state.products,loading:false, error:payload}}
      case PRODUCTS_RESET: return {...state, products:{...initialState.products}}

      case CATEGORIES_FETCH: return {...state, categories: {...state.categories,loading:true}}
      case CATEGORIES_SUCCESS: return {...state, categories: {data:payload,loading:false,error:''}}
      case CATEGORIES_ERROR: return {...state, categories:{...state.categories,loading:false, error:payload}}
      case CATEGORIES_RESET: return {...state, categories:{...initialState.categories}}

      case 'DECREMENT': return state - 1
      case 'RESET' : return 0
      default: return state
   }
}
export default reducer;