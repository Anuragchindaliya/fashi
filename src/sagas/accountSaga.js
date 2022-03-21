const { accountSuccess, accountError } = require("actions/account.action");
const { put, call, takeEvery } = require("redux-saga/effects");
const { createAccountApi } = require("services/api");
const { accountTypes } = require("types");

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
export default function* saga() {
  yield takeEvery(accountTypes.FETCH, account);
}
