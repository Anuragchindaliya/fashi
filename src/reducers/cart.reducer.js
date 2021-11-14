import { cartTypes } from "types";
import {  toast } from 'react-toastify';

const {ADD_TO_CART,UPDATE_QTY,RESET_CART} = cartTypes;

const state = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):{}
const initialState = state
const reducer = (state = initialState, action) => {
    const {type, payload} = action; //payload:{product:{...},productId:qwe123}   payload:{qty:123, productId:2777}
   switch (type) {
     //{ product: { ...el, qty: 1 }, productId: el.id }
      case ADD_TO_CART: { return {...state, [payload.productId]:payload.product}}
    //   case REMOVE_FROM_CART: return {cartItems:state.cartItems.filter(i=>i.id!==payload.item.id)}
    //{ qty: 0, productId: item.id }
      case UPDATE_QTY: {
        let final = {...state};
        if(payload.qty>0){
          final={...state,[payload.productId]:{...state[payload.productId],qty:payload.qty}}
        } else {
          delete state[payload.productId]
          final = {...state}
        }
         return final;
      }
      case RESET_CART: return {...initialState}
      default: return state
   }
}
export default reducer;