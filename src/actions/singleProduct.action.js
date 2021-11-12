import {singleProductTypes} from 'types';

const {FETCH,SUCCESS,ERROR,RESET} = singleProductTypes;

export function singleProductFetch(slug) {
    return {
       type: FETCH,
       payload: slug
    }
 }
export function singleProductSuccess(val) {
    return {
       type: SUCCESS,
       payload: val
    }
 }
export function singleProductError(val) {
    return {
       type: ERROR,
       payload: val
    }
 }
export function singleProductReset() {
    return {
       type: RESET
    }
 }