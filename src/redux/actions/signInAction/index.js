import actionConstants from "../../constants";

const loginStart = (data) => {
  return { type: actionConstants.LOGIN_START, user: data };
};
const loginSuccess = (data) => {
  return { type: actionConstants.LOGIN_SUCCESS, payload: data };
};

const loginFailure = (error) => {
  return { type: actionConstants.LOGIN_FAILED, message: error.message };
};
export { loginStart, loginSuccess, loginFailure };
