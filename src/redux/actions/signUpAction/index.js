import actionConstants from "../../constants";

const signUpStart = (data) => {
  return { type: actionConstants.SIGNUP_START, user: data };
};
const signUpSuccess = (data) => {
  return { type: actionConstants.SIGNUP_SUCCESS, payload: data };
};

const signUpFailure = (error) => {
  return { type: actionConstants.SIGNUP_FAILED, message: error.message };
};
export { signUpStart, signUpSuccess, signUpFailure };
