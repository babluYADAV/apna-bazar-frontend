import { call, put, takeEvery } from "redux-saga/effects";
import signIn from "../../../services/signInService";
import { loginSuccess, loginFailure } from "../../actions/signInAction";
import actionConstants from "../../constants";

function* signInSaga() {
  const { response, error } = yield call(signIn);
  if (response) {
    const data = yield response.json();
    yield put(loginSuccess(data));
  } else {
    console.log("error: new", error.message);
    yield put(loginFailure(error));
  }
}

function* watchSignInSaga() {
  yield takeEvery(actionConstants.LOGIN_START, signInSaga);
}
export default watchSignInSaga;
