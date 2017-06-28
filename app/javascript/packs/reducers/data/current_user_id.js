const defaultState = null;

function currentUserId(state = defaultState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
    case "SIGN_IN_SUCCESS":
    case "SIGN_UP_SUCCESS":
      return parseInt(action.data.id, 10);
    case "SIGN_OUT_REQUEST":
      return null;
    default:
      return state;
  }
}

export default currentUserId;
