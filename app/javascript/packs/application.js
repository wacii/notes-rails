import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
// import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { offline } from "redux-offline";

import axios from "axios";

import App from "./containers/app";
import setDefaultHeaders from "./init/default_headers";
import offlineConfig from "./init/offline_config";
import rootReducer from "./reducers";

document.addEventListener("DOMContentLoaded", () => {
  const preloadUser = document.getElementById("user");
  const currentUser = preloadUser &&
    JSON.parse(preloadUser.dataset.user);

  setDefaultHeaders();

  // FIXME: add redux tools back in
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      offline(offlineConfig)
    )
  );

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.status == 401)
        store.dispatch({ type: "SIGN_OUT_REQUEST" });
      return Promise.reject(error)
    }
  )

  if (currentUser)
    store.dispatch({
      type: "SIGN_IN_SUCCESS",
      data: currentUser
    });
  else
    store.dispatch({
      type: "SIGN_OUT_REQUEST",
    });

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
});
