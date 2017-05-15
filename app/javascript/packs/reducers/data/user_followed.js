const defaultState = {};

let ids, userId;

function userFollowed(state = defaultState, action) {
  switch (action.type) {
    case "GET_FOLLOWED_SUCCESS":
      ids = action.payload.map(user => user.id);
      userId = action.id;
      return Object.assign({}, state, { [userId]: ids });
    case "CREATE_FOLLOW_SUCCESS":
      const follow = action.payload;
      userId = follow.followed_id;
      ids = (state[userId] || []).concat(follow.follower_id);
      return Object.assign({}, state, { [userId]: ids })
    default:
      return state;
  }
}

export default userFollowed;
