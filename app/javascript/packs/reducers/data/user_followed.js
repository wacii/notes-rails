const defaultState = {};

function userFollowed(state = defaultState, action) {
  switch (action.type) {
    case "GET_FOLLOWED_SUCCESS":
      const ids = action.payload.map(user => user.id);
      const userId = action.id;
      return Object.assign({}, state, { [userId]: ids });
    default:
      return state;
  }
}

export default userFollowed;
