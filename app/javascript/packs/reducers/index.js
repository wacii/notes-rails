import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import auth from "./auth";
import notes from "./notes";
import latestNotes from "./latest_notes";

const rootReducer = combineReducers({
  form,
  auth,
  notes,
  latestNotes,
});

export default rootReducer;
