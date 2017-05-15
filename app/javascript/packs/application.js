import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
// import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";
import NetworkError from "redux-offline/lib/defaults/effect";
import axios from "axios";

import App from "./containers/app";
import rootReducer from "./reducers";

axios.defaults.headers.common["Accept"] = "application/json";

const token = document.querySelector("meta[name='csrf-token']").content;
axios.defaults.headers.common["X-CSRF-Token"] = token;

document.addEventListener("DOMContentLoaded", () => {
  const preload = document.getElementById("preload");
  const latestNotes = JSON.parse(preload.dataset.latest);

  let initialState;
  if (!preload.dataset.auth) {
    initialState = {
      latestNotes: { data: latestNotes },
    };
  } else {
    const auth = JSON.parse(preload.dataset.auth);
    const notes = JSON.parse(preload.dataset.notes);
    notes.forEach(note => note.review_after = new Date(note.review_after));
    initialState = {
      data: {
        currentUserId: auth.id,
        latestNotes,
        users: { [auth.id]: auth }
      },
    };
  }

  // FIXME: add redux tools back in
  // FIXME: extract and test changes to redux-offline
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      offline(Object.assign({}, offlineConfig, {
        effect: effect => (
          axios(effect)
            .then(response => response.data)
            .catch(response => new NetworkError(response.data, response.status))
        ),
      }))
    )
  );

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
});
