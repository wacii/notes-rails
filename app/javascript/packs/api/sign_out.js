import request from "./cancellable_request";
import axios from "axios";

function signOut() {
  const { cancel, promise } = request({
    url: "/users/sign_out",
    method: "DELETE",
  });

  promise.then(({ headers }) => {
    const token = headers["x-csrf-token"];
    axios.defaults.headers.common["X-CSRF-Token"] = token;
  });

  return { cancel, promise };
}

export default signOut;
