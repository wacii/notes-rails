import axios from "axios";
import offlineConfig from "redux-offline/lib/defaults";
import NetworkError from "redux-offline/lib/defaults/effect";
import createBlacklistFilter from 'redux-persist-transform-filter';

function configBuilder(persistCallback) {
  return Object.assign({}, offlineConfig, {
    effect: effect => (
      axios(effect)
        .then(response => response.data)
        .catch(response => new NetworkError(response.data, response.status))
    ),
    persistOptions: {
      blacklist: ["form"],
      transforms: [createBlacklistFilter(
        "data",
        ["currentUserId"]
      )],
    },
    persistCallback,
  });
}

export default configBuilder;
