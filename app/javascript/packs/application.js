import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./containers/app";
import rootReducer from "./reducers";
import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";

const token = document.querySelector("meta[name='csrf-token']").content;
axios.defaults.headers.common["X-CSRF-Token"] = token;

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
});
