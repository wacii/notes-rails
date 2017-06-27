import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import requests from "./requests";
import auth from "./auth";
import data from "./data";

const rootReducer = combineReducers({
  form,
  data,
  requests,
  auth,
});

export default rootReducer;
