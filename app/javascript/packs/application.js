import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
// import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";
import NetworkError from "redux-offline/lib/defaults/effect";
import createBlacklistFilter from 'redux-persist-transform-filter';
import axios from "axios";

import App from "./containers/app";
import rootReducer from "./reducers";

axios.defaults.headers.common["Accept"] = "application/json";

const token = document.querySelector("meta[name='csrf-token']").content;
axios.defaults.headers.common["X-CSRF-Token"] = token;

document.addEventListener("DOMContentLoaded", () => {
  const preloadUser = document.getElementById("user");
  const currentUser = preloadUser &&
    JSON.parse(preloadUser.dataset.user);

  // FIXME: add redux tools back in
  // FIXME: extract and test changes to redux-offline
  // FIXME: with the persistOptions blacklist
  //  there is a delay before notes are initially displayed
  //  perhaps rehydration is broken
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
        persistOptions: {
          blacklist: ["form"],
          transforms: [createBlacklistFilter(
            "data",
            ["currentUserId"]
          )],
        },
        persistCallback: () => {
          // TODO: don't repurpose existing actions here

          // If server responds 401 unauthorized, signout user
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
        },
      }))
    )
  );
});
