import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import auth from "./auth";
import notes from "./notes";
import latestNotes from "./latest_notes";
import { profile, followed, followers } from "./profile";

const rootReducer = combineReducers({
  form,
  auth,
  notes,
  latestNotes,
  profile,
  followed,
  followers,
});

export default rootReducer;
