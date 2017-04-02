import "./setup_axios";
import { post, CancelToken } from "axios";

function signUp(email, password, passwordConfirmation) {
  const cancellationSource = CancelToken.source();

  const data = {
    user: {
      email,
      password,
      "password_confirmation": passwordConfirmation,
    },
  };
  const config = {
    cancelToken: cancellationSource.token,
  };
  const promise = post("/users", data, config);

  return { cancel() { cancellationSource.cancel() }, promise };
}

export default signUp;
