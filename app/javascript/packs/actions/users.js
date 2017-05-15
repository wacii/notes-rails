import axios from "axios";

function get(id) {
  return dispatch => {
    dispatch({ type: "GET_USER_REQUEST" });

    const promise = axios({
      url: `/users/${id}`,
      method: "get"
    });

    promise.then(({ data }) => {
      dispatch({ type: "GET_USER_SUCCESS", data });
    });

    promise.catch(({ data }) => {
      dispatch({ type: "GET_USER_FAILURE", data });
    });
  }
}

function followed(id) {
  return {
    type: "GET_FOLLOWED_REQUEST",
    id,
    meta: {
      offline: {
        effect: { method: "get", url: `/users/${id}/followed` },
        commit: { type: "GET_FOLLOWED_SUCCESS", id },
        rollback: { type: "GET_FOLLOWED_FAILURE", id },
      },
    },
  };
}

function followers(id) {
  return {
    type: "GET_FOLLOWERS_REQUEST",
    id,
    meta: {
      offline: {
        effect: { method: "get", url: `/users/${id}/followers` },
        commit: { type: "GET_FOLLOWERS_SUCCESS", id },
        rollback: { type: "GET_FOLLOWERS_FAILURE", id },
      },
    },
  };
}

export {
  get,
  followed,
  followers,
};
