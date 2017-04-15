import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import auth from "./auth";
import notes from "./notes";

const rootReducer = combineReducers({
  form,
  auth,
  notes,
});

export default rootReducer;
