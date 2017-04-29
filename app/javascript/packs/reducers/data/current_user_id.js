const defaultState = null;

function currentUserId(state = defaultState, action) {
  switch (action.case) {
    case "SIGN_IN_SUCCESS":
    case "SIGN_UP_SUCCESS":
      return action.data.id;
    case "SIGN_OUT_REQUEST":
      return null;
    default:
      return state;
  }
}

export default currentUserId;
