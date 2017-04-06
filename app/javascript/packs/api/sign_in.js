import request from "./cancellable_request";

function signIn(email, password) {
  const data = {
    user: {
      email,
      password,
    },
  };

  return request({
    url: "/users/sign_in",
    method: "post",
    data,
  });
}

export default signIn;
