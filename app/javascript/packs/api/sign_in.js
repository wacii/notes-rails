import "./setup_axios";
import { post, CancelToken } from "axios";

function signIn(email, password) {
  const cancellationSource = CancelToken.source();

  const data = {
    user: {
      email,
      password,
    },
  };
  const config = {
    cancelToken: cancellationSource.token,
  };
  const promise = post("/users/sign_in", data, config);

  return {
    cancel() {
      cancellationSource.cancel()
    },
    promise
  };
}

export default signIn;
