import { call, put, takeEvery } from "redux-saga/effects";
import { allProductsApi } from "../services/api";
import { productsTypes } from "types";
import { productsSuccess, productsError } from "../actions/products.action";

function* fetchProducts() {
  try {
    const products = yield call(allProductsApi);
    yield put(productsSuccess(products));
  } catch (e) {
    yield put(productsError(e));
  }
}

export default function* saga() {
  yield takeEvery(productsTypes.FETCH, fetchProducts);
}
