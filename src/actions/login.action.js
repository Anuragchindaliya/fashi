import { loginTypes } from "types";

export function login() {
  return { type: loginTypes.FETCH };
}
export function loginSuccess(val) {
  return { type: loginTypes.SUCCESS, payload: val };
}
export function loginError(val) {
  return { type: loginTypes.ERROR, payload: val };
}

export function loginReset(val) {
  return { type: loginTypes.RESET };
}
const loginActions = {
  login,
  loginSuccess,
  loginError,
  loginReset,
};
export default loginActions;
