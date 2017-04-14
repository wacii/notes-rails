const defaultState = {
  signedIn: false,
  loading: false,
  error: null,
};

function authReducer(state = defaultState, action) {
  switch (action.type) {
    case "SIGN_IN_REQUEST":
      return { signedIn: false, loading: true, error: null };
    case "SIGN_IN_SUCCESS":
      return { signedIn: true, loading: false, error: null };
    case "SIGN_IN_FAILURE":
      return { signedIn: false, loading: false, error: action.message };

    case "SIGN_OUT_REQUEST":
      return { signedIn: true, loading: true, error: null };
    case "SIGN_OUT_SUCCESS":
      return { signedIn: false, loading: false, error: null };
    case "SIGN_OUT_FAILURE":
      return { signedIn: false, loading: false, error: action.message };

      case "SIGN_UP_REQUEST":
        return { signedIn: false, loading: true, error: null };
      case "SIGN_UP_SUCCESS":
        return { signedIn: true, loading: false, error: null };
      case "SIGN_UP_FAILURE":
        return { signedIn: false, loading: false, error: action.message };

    default:
      return state;
  }
}

export default authReducer;
