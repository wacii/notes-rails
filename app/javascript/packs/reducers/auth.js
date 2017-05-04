const defaultState = {
  data: null,
  loading: false,
  error: null,
};

const extend = Object.assign.bind({});

function authReducer(state = defaultState, action) {
  switch (action.type) {
    case "SIGN_UP_REQUEST":
      return extend(defaultState, { loading: true });
    case "SIGN_UP_SUCCESS":
      return extend(defaultState, { data: action.data });
    case "SIGN_UP_FAILURE":
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
