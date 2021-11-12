import {apiTypeCreator} from 'utils';
export const categoriesTypes = apiTypeCreator('CATEGORIES');
export const productsTypes = apiTypeCreator('PRODUCTS');
export const singleProductTypes = apiTypeCreator('SINGLE_PRODUCT');
export const cartTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    UPDATE_QTY: 'UPDATE_QTY',
    RESET_CART: 'RESET_CART'
}