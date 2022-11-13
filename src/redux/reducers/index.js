import { combineReducers } from "redux";
import signInReducer from "./signinReducer";

const rootReducer = combineReducers({
  signIn: signInReducer,
});

export default rootReducer;
