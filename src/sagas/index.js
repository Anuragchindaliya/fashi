import { all } from 'redux-saga/effects';
import productsSaga from './productsSaga';
import singleProductSaga from './singleProductSaga';
import categoriesSaga from './categoriesSaga';

export default function* rootSaga() {
  yield all([
   productsSaga(),
   categoriesSaga(),
   singleProductSaga()
  ])
}