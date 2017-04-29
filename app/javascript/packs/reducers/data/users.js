const defaultState = {};

let user;

function users(state = defaultState, action) {
  switch (action.case) {
    case "SIGN_IN_SUCCESS":
    case "SIGN_UP_SUCCESS":
      user = action.data;
      return Object.assign({}, state, { [user.id]: user });
    case "GET_PROFILE_SUCCESS":
      user = action.data;
      return Object.assign({}, state, { [user.id]: user });
    default:
      return state;
  }
}

export default users;
