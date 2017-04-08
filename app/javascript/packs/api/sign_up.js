import request from "./cancellable_request";
import axios from "axios";

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

  promise.then(({ headers }) => {
    const token = headers["x-csrf-token"];
    axios.defaults.headers.common["X-CSRF-Token"] = token;
  });

  return { cancel, promise };
}

export default signUp;
