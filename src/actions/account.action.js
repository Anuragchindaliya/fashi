import { accountTypes } from "types";

export function createAccount() {
  return { type: accountTypes.FETCH };
}
export function accountSuccess(val) {
  return { type: accountTypes.SUCCESS, payload: val };
}
export function accountError(val) {
  return { type: accountTypes.ERROR, payload: val };
}

export function accountReset(val) {
  return { type: accountTypes.RESET };
}
const accountActions = {
  createAccount,
  accountSuccess,
  accountError,
  accountReset,
};
export default accountActions;
