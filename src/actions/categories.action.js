import { categoriesTypes } from "types";
const {FETCH,SUCCESS,ERROR,RESET} = categoriesTypes;

export function categoriesFetch() {
    return {
       type: FETCH
    }
 }
export function categoriesSuccess(val) {
    return {
       type: SUCCESS,
       payload: val
    }
 }
export function categoriesError(val) {
    return {
       type: ERROR,
       payload: val
    }
 }
export function categoriesReset() {
    return {
       type: RESET
    }
 }