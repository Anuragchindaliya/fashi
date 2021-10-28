import {productsTypes} from 'types';

const {PRODUCTS_FETCH,PRODUCTS_SUCCESS,PRODUCTS_ERROR,PRODUCTS_RESET} = productsTypes;

export function productsFetch() {
    return {
       type: PRODUCTS_FETCH
    }
 }
export function productsSuccess(val) {
    return {
       type: PRODUCTS_SUCCESS,
       payload: val
    }
 }
export function productsError(val) {
    return {
       type: PRODUCTS_ERROR,
       payload: val
    }
 }
export function productsReset() {
    return {
       type: PRODUCTS_RESET
    }
 }