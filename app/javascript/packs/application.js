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
  // FIXME: add redux tools back in
  // FIXME: extract and test changes to redux-offline
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      offline(Object.assign({}, offlineConfig, {
        effect: effect => (
          axios(effect)
            .then(response => response.data)
            .catch(response => new NetworkError(response.data, response.status))
        ),
        persistCallback: () => {
          render(
            <Provider store={store}>
              <App />
            </Provider>,
            document.getElementById("app")
          );
        },
      }))
    )
  );
});
