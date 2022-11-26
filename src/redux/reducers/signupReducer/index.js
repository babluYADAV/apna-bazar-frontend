import actionConstants from "../../constants";

const initialState = {
  user: {},
  loading: false,
  error: "",
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstants.SIGNUP_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case actionConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };
    case actionConstants.SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default signUpReducer;
