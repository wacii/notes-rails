import axios from "axios";

function get(id) {
  return dispatch => {
    dispatch({ type: "GET_PROFILE_REQUEST" });

    const promise = axios({
      url: `/users/${id}`,
      method: "get"
    });

    promise.then(({ data }) => {
      dispatch({ type: "GET_PROFILE_SUCCESS", data });
    });

    promise.catch(({ data }) => {
      dispatch({ type: "GET_PROFILE_FAILURE", data });
    });
  }
}

function followed(id) {
  return dispatch => {
    dispatch({ type: "GET_FOLLOWED_REQUEST", id });

    const promise = axios({
      url: `/users/${id}/followed`,
      method: "get"
    });

    promise.then(({ data }) => {
      dispatch({ type: "GET_FOLLOWED_SUCCESS", data, id });
    });

    promise.catch(({ data }) => {
      dispatch({ type: "GET_FOLLOWED_FAILURE", data, id });
    });
  }
}

function followers(id) {
  return dispatch => {
    dispatch({ type: "GET_FOLLOWERS_REQUEST", id });

    const promise = axios({
      url: `/users/${id}/followers`,
      method: "get"
    });

    promise.then(({ data }) => {
      dispatch({ type: "GET_FOLLOWERS_SUCCESS", data, id });
    });

    promise.catch(({ data }) => {
      dispatch({ type: "GET_FOLLOWERS_FAILURE", data, id });
    });
  }
}

export {
  get,
  followed,
  followers,
};
