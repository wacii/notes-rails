const defaultState = {};

let user, users;

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
    case "SIGN_UP_SUCCESS":
      user = action.data;
      return Object.assign({}, state, { [user.id]: user });
    case "UPDATE_USERS":
    case "GET_USER_SUCCESS":
      user = action.data;
      return Object.assign({}, state, { [user.id]: user });
    case "UPDATE_REGISTRATION_REQUEST":
      const { username, email } = action.data;
      user = (username ? { username, email } : {});
      return Object.assign({}, state, { [action.currentUserId]: user });

    case "GET_FOLLOWED_SUCCESS":
    case "GET_FOLLOWERS_SUCCESS":
      users = action.payload.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
      }, {});
      return Object.assign({}, state, users);

    default:
      return state;
  }
}

export default reducer;
