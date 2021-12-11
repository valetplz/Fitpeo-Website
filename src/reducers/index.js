import { combineReducers } from "redux";
import uiReducer from "./uiReducer";

// Import custom components
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  alertToast: uiReducer
});

export default rootReducer;
