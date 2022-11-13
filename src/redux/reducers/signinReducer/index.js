import actionConstants from "../../constants";

const initialState = {
  user: {},
  loading: false,
  error: "",
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstants.LOGIN_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case actionConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };
    case actionConstants.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default signInReducer;
