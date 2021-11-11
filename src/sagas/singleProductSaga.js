import { call, put, takeEvery } from 'redux-saga/effects';
import { productBySlug } from '../services/api';
import { singleProductTypes } from 'types';
import {productsSuccess, productsError} from '../actions/products.action';

function* fetchProducts() {
   try {
      const products = yield call(productBySlug);
      yield put(productsSuccess(products));
   } catch (e) {
      yield put(productsError(e));
   }
}

export default function* saga() {
   yield takeEvery(singleProductTypes.FETCH, fetchProducts);
}