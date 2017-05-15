const defaultState = {}

let ids, userId;

function userFollowers(state = defaultState, action) {
  switch (action.type) {
    case "GET_FOLLOWERS_SUCCESS":
      ids = action.payload.map(user => user.id);
      userId = action.id;
      return Object.assign({}, state, { [userId]: ids });
    case "CREATE_FOLLOW_SUCCESS":
      const follow = action.payload;
      userId = follow.follower_id;
      ids = (state[userId] || []).concat(follow.followed_id);
      return Object.assign({}, state, { [userId]: ids });
    default:
      return state;
  }
}

export default userFollowers;
