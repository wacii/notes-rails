const defaultState = {
  data: null,
  loading: true,
  error: null,
};

function profile(state = defaultState, action) {
  switch(action.type) {
    case "GET_PROFILE_REQUEST":
      return Object.assign({}, defaultState);
    case "GET_PROFILE_SUCCESS":
      return { data: action.data, loading: false, error: null };
    case "GET_PROFILE_FAILURE":
      return { data: null, loading: false, error: action.data };
    default:
      return state;
  }
}

function followed(state = defaultState, action) {
  switch(action.type) {
    case "GET_FOLLOWED_REQUEST":
      return Object.assign({}, defaultState);
    case "GET_FOLLOWED_SUCCESS":
      return { data: action.data, loading: false, error: null };
    case "GET_FOLLOWED_FAILURE":
      return { data: null, loading: false, error: action.data };
    default:
      return state;
  }
}

function followers(state = defaultState, action) {
  switch(action.type) {
    case "GET_FOLLOWERS_REQUEST":
      return Object.assign({}, defaultState);
    case "GET_FOLLOWERS_SUCCESS":
      return { data: action.data, loading: false, error: null };
    case "GET_FOLLOWERS_FAILURE":
      return { data: null, loading: false, error: action.data };
    default:
      return state;
  }
}

export {
  profile,
  followed,
  followers,
};
