const defaultState = {}

function userFollowers(state = defaultState, action) {
  switch (action.type) {
    case "GET_FOLLOWERS_SUCCESS":
      return Object.assign({}, state, { [action.id]: action.data });
    default:
      return state;
  }
}

export default userFollowers;
