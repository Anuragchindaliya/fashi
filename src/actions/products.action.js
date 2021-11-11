import {productsTypes} from 'types';

const {FETCH,SUCCESS,ERROR,RESET} = productsTypes;

export function productsFetch() {
    return {
       type: FETCH
    }
 }
export function productsSuccess(val) {
    return {
       type: SUCCESS,
       payload: val
    }
 }
export function productsError(val) {
    return {
       type: ERROR,
       payload: val
    }
 }
export function productsReset() {
    return {
       type: RESET
    }
 }