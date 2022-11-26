import { all } from "redux-saga/effects";
import watchSignInSaga from "./signInSaga";
import watchSignUpSaga from "./signUpSaga";

export default function* rootSaga() {
  yield all([watchSignInSaga(), watchSignUpSaga()]);
}
