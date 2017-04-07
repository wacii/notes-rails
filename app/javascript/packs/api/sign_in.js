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

  promise.then(({ headers }) => {
    const token = headers["x-csrf-token"];
    axios.defaults.headers.common["X-CSRF-Token"] = token;
  });

  return { cancel, promise };
}

export default signIn;
