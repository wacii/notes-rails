import axios from "axios";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import NetworkError from "@redux-offline/redux-offline/lib/defaults/effect";
import createBlacklistFilter from 'redux-persist-transform-filter';
// TODO: do not save currentUserId
//  this was not working for whatever reason
//  perhaps the combination with blacklist/whitelist?

const config = Object.assign({}, offlineConfig, {
  effect: effect => (
    axios(effect)
      .then(response => response.data)
      .catch(response => new NetworkError(response.data, response.status))
  ),
  persistOptions: {
    whitelist: ["data", "offline"],
  },
});

export default config;
