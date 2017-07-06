import axios, { CancelToken } from "axios";
import { reset } from 'redux-form';

let cancellationSource = CancelToken.source();

// FIXME: use action types that describe the event not the consequences
// FIXME: use `payload` not `data`
// FIXME: catch errors

function signIn(email, password) {
  return dispatch => {
    const data = {
      user: { email, password},
    };

    return axios({
      url: "/users/sign_in",
      method: "post",
      data,
    }).then(updateCSRFToken)
      .then(({ data }) => {
        dispatch({ type: "UPDATE_USERS", data });
        dispatch({ type: "SET_CURRENT_USER", data });
      });
  }
}

function signOut() {
  return dispatch => {
    cancellationSource.cancel();
    cancellationSource = CancelToken.source()

    dispatch({ type: "SIGN_OUT_REQUEST" });

    const promise = axios({
      url: "/users/sign_out",
      method: "delete",
      cancelToken: cancellationSource.token,
    });

    promise.then(updateCSRFToken);

    promise.then(_request => {
      dispatch({ type: "SIGN_OUT_SUCCESS" });
    });

    promise.catch(_request => {
      const message = "An error prevented you from signing out.";
      dispatch({ type: "SIGN_OUT_FAILURE", error: message });
    });

    return promise;
  }
}

function signUp(username, email, password, passwordConfirmation) {
  return dispatch => {
    const data = {
      user: {
        username,
        email,
        password,
        "password_confirmation": passwordConfirmation,
      },
    };

    return axios({
      url: "/users",
      method: "post",
      data,
    }).then(updateCSRFToken)
      .then(({ data }) => {
        dispatch({ type: "UPDATE_USERS", data });
        dispatch({ type: "SET_CURRENT_USER", data });
      }).catch(error => log(error));
  }
}

// FIXME: separate update username/email from update password
function update(attributes) {
  return (dispatch, getState) => {
    const { data: { currentUserId } } = getState();

    dispatch({
      type: "UPDATE_REGISTRATION_REQUEST",
      currentUserId,
      data: attributes
    });

    const data = {
      user: attributes,
    };

    const promise = axios({
      url: "/users",
      method: "patch",
      data,
    });

    promise.then(_response => {
      dispatch({ type: "UPDATE_REGISTRATION_SUCCESS" });
      dispatch(reset("settingsPassword"));
    });

    promise.catch(_response => {
      dispatch({ type: "UPDATE_REGISTRATION_FAILURE" });
    });

    return promise;
  };
}

function updateCSRFToken(response) {
  const { headers } = response;
  const token = headers["x-csrf-token"];
  axios.defaults.headers.common["X-CSRF-Token"] = token;
  return response;
}

export {
  signIn,
  signOut,
  signUp,
  update,
};
