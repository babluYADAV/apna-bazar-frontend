import { call, put, takeLatest } from "redux-saga/effects";
import signIn from "../../../services/signInService";
import { loginSuccess, loginFailure } from "../../actions/signInAction";
import actionConstants from "../../constants";

function* signInSaga(payload) {
  const { response, error } = yield call(signIn, payload);
  if (response) {
    const data = yield response.data;
    yield put(loginSuccess(data));
  } else {
    console.log("error: new", error.message);
    yield put(loginFailure(error));
  }
}

function* watchSignInSaga() {
  yield takeLatest(actionConstants.LOGIN_START, signInSaga);
}
export default watchSignInSaga;
