import { cartTypes } from "types";
const {ADD_TO_CART,REMOVE_FROM_CART,UPDATE_QTY,RESET_CART} = cartTypes;
const initialState = {
    // 2777:{..., qty:1}
}
const reducer = (state = initialState, action) => {
    const {type, payload} = action; //payload:{product:{...},productId:qwe123}   payload:{qty:123, productId:2777}
   switch (type) {
      case ADD_TO_CART: return {...state, [payload.productId]:payload.product}
    //   case REMOVE_FROM_CART: return {cartItems:state.cartItems.filter(i=>i.id!==payload.item.id)}
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