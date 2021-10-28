import { call, put, takeEvery } from 'redux-saga/effects';
import {allCategoriesApi} from '../services/api';
import {categoriesSuccess, categoriesError} from '../actions/categories.action';
import { categoriesTypes } from 'types';

function* fetchCategories() {
    try {
       const categories = yield call(allCategoriesApi);
       yield put(categoriesSuccess(categories));
    } catch (e) {
       yield put(categoriesError(e));
    }
 }

export default function* saga() {
   yield takeEvery(categoriesTypes.CATEGORIES_FETCH, fetchCategories);
}