import axios, { CancelToken } from "axios";

let signedIn = false;
let loading = false;
let error = false;
let message = null;

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("auth");
  const email = el.getAttribute("data-email");
  signedIn = !!email;
});

let cancellationSource = CancelToken.source();

function signIn(email, password) {
  cancellationSource.cancel();
  cancellationSource = CancelToken.source();

  signedIn = false;
  loading = false;
  error = false;
  message = null;
  broadcast();

  const data = {
    user: { email, password },
  };
  axios({
    url: "/users/sign_in",
    method: "post",
    data,
    cancelToken: cancellationSource.token,
  })
  .then(_response => {
    signedIn = true;
    loading = false;
    error = false;
    message = null;
    broadcast();
  })
  .catch(({ status }) => {
    signedIn = false;
    loading = false;
    error = true;
    message = (status < 500
      ? "Email and password not found"
      : "There was an error. Please reload the page."
    );
    broadcast();
  });
}

function signOut() {
  cancellationSource.cancel();
  cancellationSource = CancelToken.source();

  signedIn = false;
  loading = true;
  error = false;
  message = null;
  broadcast();

  axios({
    url: "/users/sign_out",
    method: "delete",
    cancelToken: cancellationSource.token,
  })
  .then(_response => {
    signedIn = false;
    loading = false;
    error = false;
    message = null;
    broadcast();
  })
  .catch(_response => {
    signedIn = false;
    loading = false;
    error = true;
    message = "An error prevented you from signing out.";
    broadcast();
  });
}

function signUp(email, password, passwordConfirmation) {
  cancellationSource.cancel();
  cancellationSource = CancelToken.source();

  signedIn = false;
  loading = true;
  error = false;
  message = null;
  broadcast();

  const data = {
    user: {
      email,
      password,
      "password_confirmation": passwordConfirmation,
    },
  };
  axios({
    url: "/users",
    method: "post",
    data,
    cancelToken: cancellationSource.token,
  })
  .then(_response => {
    signedIn = true;
    loading = false;
    error = false;
    message = null;
    broadcast();
  })
  .catch(({ status }) => {
    signedIn = false;
    loading = false;
    error = true;
    message = (status < 500
      ? "Email already in use"
      : "An error occurred. Please reload the page."
    );
    broadcast();
  });
}

const listeners = [];

function subscribe(listener) {
  listener({ signedIn, loading, error, message });

  listeners.push(listener);

  return () => {
    const i = listeners.indexOf(listener);
    listeners.splice(i, 1);
  }
}

function broadcast() {
  listeners.forEach(fn => fn({ signedIn, loading, error, message }));
}

export {
  signIn,
  signOut,
  signUp,
  subscribe,
};
