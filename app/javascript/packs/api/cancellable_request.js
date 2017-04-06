import "./setup_axios";
import axios, { CancelToken } from "axios";

function cancellableRequest(config) {
  const cancellationSource = CancelToken.source();
  const { cancelToken } = cancellationSource;
  const promise = axios(Object.assign({}, config, { cancelToken }));

  return {
    cancel() {
      cancellationSource.cancel();
    },
    promise,
  };
}

export default cancellableRequest;
