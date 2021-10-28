import { categoriesTypes } from "types";
const {CATEGORIES_FETCH,CATEGORIES_SUCCESS,CATEGORIES_ERROR,CATEGORIES_RESET} = categoriesTypes;

export function categoriesFetch() {
    return {
       type: CATEGORIES_FETCH
    }
 }
export function categoriesSuccess(val) {
    return {
       type: CATEGORIES_SUCCESS,
       payload: val
    }
 }
export function categoriesError(val) {
    return {
       type: CATEGORIES_ERROR,
       payload: val
    }
 }
export function categoriesReset() {
    return {
       type: CATEGORIES_RESET
    }
 }