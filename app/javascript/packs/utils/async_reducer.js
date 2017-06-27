function asyncReducer(key, prefix) {
  const defaultState = {
    loading: false,
    error: null,
  };

  const REQUEST = `${prefix}_REQUEST`;
  const SUCCESS = `${prefix}_SUCCESS`;
  const FAILURE = `${prefix}_FAILURE`

  return (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST:
        return { loading: true, error: null };
      case SUCCESS:
        return { loading: false, error: null };
      case FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
}

export default asyncReducer;
