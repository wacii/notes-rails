import axios, { CancelToken } from "axios";

const cancellationSource = CancelToken.source();

function signIn(email, password) {
  return dispatch => {
    cancellationSource.cancel();
    cancellationSource = CancelToken.source()

    dispatch({ type: "SIGN_IN_REQUEST" });

    const data = {
      user: { email, password},
    };

    const promise = axios({
      url: "/users/sign_in",
      method: "post",
      data,
      cancelToken: cancellationSource.token,
    });

    promise.then(updateCSRFToken);

    promise.then(({ data }) => {
      dispatch({ type: "SIGN_IN_SUCCESS", data });
    });

    promise.catch(({ status }) => {
      const message = (status < 500
        ? "Email and password not found"
        : "There was an error. Please reload the page."
      );
      dispatch({ type: "SIGN_IN_FAILURE", error: message });
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
  }
}

function signUp(username, email, password, passwordConfirmation) {
  return dispatch => {
    cancellationSource.cancel();
    cancellationSource = CancelToken.source()

    dispatch({ type: "SIGN_UP_REQUEST" });

    const data = {
      user: {
        username,
        email,
        password,
        "password_confirmation": passwordConfirmation,
      },
    };

    const promise = axios({
      url: "/users",
      method: "post",
      data,
      cancelToken: cancellationSource.token,
    });

    promise.then(updateCSRFToken);

    promise.then(({ data }) => {
      dispatch({ type: "SIGN_UP_SUCCESS", data });
    });

    promise.catch(({ status }) => {
      const message = (status < 500
        ? "Email already in use"
        : "An error occurred. Please reload the page."
      );
      dispatch({ type: "SIGN_UP_FAILURE", error: message });
    });
  }
}

function updateCSRFToken({ headers }) {
  const token = headers["x-csrf-token"];
  axios.defaults.headers.common["X-CSRF-Token"] = token;
}

export {
  signIn,
  signOut,
  signUp,
};
