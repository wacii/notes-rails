import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import auth from "./auth";
import notes from "./notes";
import latestNotes from "./latest_notes";
import { profile, followed, followers } from "./profile";
import follows from "./follows";
import data from "./data";

const rootReducer = combineReducers({
  form,
  data,
  auth,
  notes,
  latestNotes,
  profile,
  followed,
  followers,
  follows,
});

export default rootReducer;
