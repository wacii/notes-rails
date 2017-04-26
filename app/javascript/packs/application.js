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

document.addEventListener("DOMContentLoaded", () => {
  const preload = document.getElementById("preload");
  const username = preload.dataset.username || "";

  let initialState;
  if (!username) {
    initialState = {};
  } else {
    const notes = JSON.parse(preload.dataset.notes);
    notes.forEach(note => note.review_after = new Date(note.review_after));
    initialState = {
      auth: { username },
      notes: { data: notes },
    };
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
});
