import request from "./cancellable_request";
import axios from "axios";

function signIn(email, password) {
  const data = {
    user: {
      email,
      password,
    },
  };

  const { cancel, promise } = request({
    url: "/users/sign_in",
    method: "post",
    data,
  });

  promise.then(updateCSRFToken);

  return { cancel, promise };
}

function signOut() {
  const { cancel, promise } = request({
    url: "/users/sign_out",
    method: "DELETE",
  });

  promise.then(updateCSRFToken);

  return { cancel, promise };
}

function signUp(email, password, passwordConfirmation) {
  const data = {
    user: {
      email,
      password,
      "password_confirmation": passwordConfirmation,
    },
  };

  const { cancel, promise} = request({
    url: "/users",
    method: "POST",
    data,
  });

  promise.then(updateCSRFToken);

  return { cancel, promise };
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
