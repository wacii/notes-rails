const defaultState = {}

function userFollowers(state = defaultState, action) {
  switch (action.type) {
    case "GET_FOLLOWERS_SUCCESS":
      const ids = action.payload.map(user => user.id);
      const userId = action.id;
      return Object.assign({}, state, { [userId]: ids });
    default:
      return state;
  }
}

export default userFollowers;
