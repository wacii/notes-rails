import { combineReducers } from "redux";
import currentUserId from "./current_user_id";
import latestNotes from "./latest_notes";
import notes from "./notes";
import userFollowed from "./user_followed";
import userFollowers from "./user_followers";
import users from "./users";

const data = combineReducers({
  currentUserId,
  latestNotes,
  notes,
  userFollowed,
  userFollowers,
  users,
});

export default data;
