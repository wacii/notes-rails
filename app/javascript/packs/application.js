import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
// import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { offline } from "redux-offline";

import App from "./containers/app";
import setDefaultHeaders from "./init/default_headers";
import offlineConfig from "./init/offline_config";
import syncAuthState from "./init/sync_auth_state";
import rootReducer from "./reducers";

document.addEventListener("DOMContentLoaded", () => {
  // FIXME: add redux tools back in
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      offline(offlineConfig)
    )
  );

  setDefaultHeaders();
  syncAuthState(store);

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
});
