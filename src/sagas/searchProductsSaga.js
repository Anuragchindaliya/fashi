import { call, put, takeLatest, select } from "redux-saga/effects";
import { searchProduct } from "../services/api";
import { searchProductsTypes } from "types";
import {
  searchProductsSuccess,
  searchProductsError,
} from "../actions/searchProducts.action";

function* searchProductsWorker({payload}) {
  try {
    // const state = yield select();
    const products = yield call(searchProduct, payload);
    yield put(searchProductsSuccess(products));
  } catch (e) {
    yield put(searchProductsError(e));
  }
}

export default function* saga() {
  yield takeLatest(searchProductsTypes.FETCH, searchProductsWorker);
}
