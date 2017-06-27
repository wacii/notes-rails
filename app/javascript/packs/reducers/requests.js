import { combineReducers } from "redux";
import createReducer from "../utils/async_reducer";

// TODO: define constants separately
// TODO: generate sub action types and corresponding keys

const config = {
  createFollow: "CREATE_FOLLOW",
  fetchNotes: "FETCH_NOTES",
  fetchLatestNotes: "FETCH_LATEST_NOTES",
  createNote: "CREATE_NOTE",
  destroyNote: "DESTROY_NOTE",
  updateNote: "UPDATE_NOTE",
  getUser: "GET_USER",
  getFollowed: "GET_FOLLOWED",
  getFollowers: "GET_FOLLOWERS",
};

const reducers = Object.keys(config).reduce((reducers, key) => {
  reducers[key] = createReducer(key, config[key]);
  return reducers;
}, {});

export default combineReducers(reducers)
