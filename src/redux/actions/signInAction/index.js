import actionConstants from "../../constants";

const loginStart = () => {
  return { type: actionConstants.LOGIN_START };
};
const loginSuccess = (data) => {
  return { type: actionConstants.LOGIN_SUCCESS, payload: data };
};

const loginFailure = (error) => {
  return { type: actionConstants.LOGIN_FAILED, message: error.message };
};
export { loginStart, loginSuccess, loginFailure };
