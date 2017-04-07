import request from "./cancellable_request";

function signOut() {
  return request({
    url: "/users/sign_out",
    method: "DELETE",
  });
}

export default signOut;
