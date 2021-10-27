import { call, put, takeEvery } from 'redux-saga/effects';
import {allProductsApi, allCategoriesApi} from './services/api';
import {productTypes, categoryTypes} from './types';
import {productsSuccess, productsError, categoriesSuccess, categoriesError} from './actions';



function* fetchProducts() {
   try {
      const products = yield call(allProductsApi);
      yield put(productsSuccess(products));
   } catch (e) {
      yield put(productsError(e));
   }
}
function* fetchCategories() {
    try {
       const categories = yield call(allCategoriesApi);
       yield put(categoriesSuccess(categories));
    } catch (e) {
       yield put(categoriesError(e));
    }
 }

export default function* saga() {
   yield takeEvery(productTypes.PRODUCTS_FETCH, fetchProducts);
   yield takeEvery(categoryTypes.CATEGORIES_FETCH, fetchCategories);
}