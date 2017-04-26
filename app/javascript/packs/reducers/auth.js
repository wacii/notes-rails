const defaultState = {
  username: "",
  loading: false,
  error: null,
};

const extend = Object.assign.bind({});

function authReducer(state = defaultState, action) {
  switch (action.type) {
    case "SIGN_UP_REQUEST":
    case "SIGN_IN_REQUEST":
      return extend(defaultState, { loading: true });
    case "SIGN_UP_SUCCESS":
    case "SIGN_IN_SUCCESS":
      return extend(defaultState, { username: action.data });
    case "SIGN_UP_FAILURE":
    case "SIGN_IN_FAILURE":
      return extend(defaultState, { error: action.message });

    case "SIGN_OUT_REQUEST":
      return extend(state, { loading: true, error: null });
    case "SIGN_OUT_SUCCESS":
      return extend(defaultState);
    case "SIGN_OUT_FAILURE":
      return extend(defaultState, { error: action.message });

    default:
      return state;
  }
}

export default authReducer;
