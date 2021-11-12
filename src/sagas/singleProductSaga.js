import { call, put, takeEvery, select } from 'redux-saga/effects';
import { productBySlug } from '../services/api';
import { singleProductTypes } from 'types';
import {singleProductSuccess, singleProductError} from '../actions/singleProduct.action';

function* fetchSingleProduct() {
   const state = yield select();
   try {
      const products = yield call(productBySlug,state.singleProduct.slug);
      yield put(singleProductSuccess(products));
   } catch (e) {
      yield put(singleProductError(e));
   }
}

export default function* saga() {
   yield takeEvery(singleProductTypes.FETCH, fetchSingleProduct);
}