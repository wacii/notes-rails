import { combineReducers } from "redux";
import auth from "./auth";
import notes from "./notes";

const rootReducer = combineReducers({
  auth,
  notes,
});

export default rootReducer;
