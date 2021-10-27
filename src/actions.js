import {productTypes, categoryTypes} from './types';
const {PRODUCTS_FETCH,PRODUCTS_SUCCESS,PRODUCTS_ERROR,PRODUCTS_RESET} = productTypes;
const {CATEGORIES_FETCH,CATEGORIES_SUCCESS,CATEGORIES_ERROR,CATEGORIES_RESET} = categoryTypes;

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
 export function updateCategories(val) {
    return {
       type: 'UPDATE_CATEGORIES',
       payload: val
    }
 }
 export function decrement() {
    return {
       type: 'DECREMENT'
    }
 }
 export function reset() {
    return { type: 'RESET' }
 }