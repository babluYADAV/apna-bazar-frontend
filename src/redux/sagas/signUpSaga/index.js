import { call, put, takeLatest } from "redux-saga/effects";
import signUp from "../../../services/signUpService";
import { signUpFailure, signUpSuccess } from "../../actions/signUpAction";
import actionConstants from "../../constants";

function* signUpSaga(payload) {
  const { response, error } = yield call(signUp, payload);
  if (response) {
    const data = yield response.data;
    yield put(signUpSuccess(data));
  } else {
    console.log("error: new", error.message);
    yield put(signUpFailure(error));
  }
}

function* watchSignUpSaga() {
  yield takeLatest(actionConstants.SIGNUP_START, signUpSaga);
}
export default watchSignUpSaga;
