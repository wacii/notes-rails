import request from "./cancellable_request";

function signUp(email, password, passwordConfirmation) {
  const data = {
    user: {
      email,
      password,
      "password_confirmation": passwordConfirmation,
    },
  };

  return request({
    url: "/users",
    method: "POST",
    data,
  });
}

export default signUp;
