import { combineReducers } from "redux";
import signInReducer from "./signinReducer";
import signUpReducer from "./signupReducer";

const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
});

export default rootReducer;
