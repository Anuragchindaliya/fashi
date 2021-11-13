import { cartTypes } from "types";
const {ADD_TO_CART,UPDATE_QTY,RESET_CART} = cartTypes;

export function addToCart(val) {
    return {
       type: ADD_TO_CART,
       payload: val
    }
 }
 export function updateQty(val) {
    return {
       type: UPDATE_QTY,
       payload: val
    }
 }
 export function resetCart(val) {
    return {
       type: RESET_CART,
       payload: val
    }
 }

 export const cartActions = {
   addToCart,
   updateQty,
   resetCart
 }
