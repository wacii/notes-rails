const defaultState = {
  data: null,
  loading: true,
  error: null,
};

function follows(state = defaultState, action) {
  switch (action.type) {
    case "CREATE_FOLLOW_REQUEST":
      return Object.assign({}, defaultState);
    case "CREATE_FOLLOW_SUCCESS":
      return { data: action.data, loading: false, error: null };
    case "CREATE_FOLLOW_FAILURE":
      return { data: null, loading: false, error: action.data };
    default:
      return state;
  }
}

export default follows;
