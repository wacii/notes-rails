const defaultState = {};

function userFollowed(state = defaultState, action) {
  switch (action.type) {
    case "GET_FOLLOWED_SUCCESS":
      return Object.assign({}, state, { [action.id]: action.data });
    default:
      return state;
  }
}

export default userFollowed;
