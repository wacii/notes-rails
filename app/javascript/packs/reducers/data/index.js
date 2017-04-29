import { combineReducers } from "redux";
import currentUserId from "./current_user_id";
import latestNotes from "./latest_notes";
import userFollowed from "./user_followed";
import userFollowers from "./user_followers";
import userNotes from "./user_notes";
import users from "./users";

const data = combineReducers({
  currentUserId,
  latestNotes,
  userFollowed,
  userFollowers,
  userNotes,
  users,
});

export default data;
