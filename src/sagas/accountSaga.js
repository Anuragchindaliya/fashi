import { loginError, loginSuccess } from "actions/login.action";

const { accountSuccess, accountError } = require("actions/account.action");
const { put, call, takeEvery } = require("redux-saga/effects");
const { createAccountApi, loginApi } = require("services/api");
const { accountTypes, loginTypes } = require("types");

function* account() {
  try {
    const data = yield call(createAccountApi);
    if (data.code) {
      yield put(accountError({ error: "Unable to create account" }));
    } else {
      yield put(accountSuccess(data));
    }
  } catch (e) {
    yield put(accountError(e));
  }
}
function* login() {
  try {
    const data = yield call(loginApi);
    if (data.code) {
      yield put(loginError({ error: "Unable to create account" }));
    } else {
      yield put(loginSuccess(data));
    }
  } catch (e) {
    yield put(loginError(e));
  }
}
export default function* saga() {
  yield takeEvery(accountTypes.FETCH, account);
  yield takeEvery(loginTypes.FETCH, login);
}
