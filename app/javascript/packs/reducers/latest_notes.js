const defaultState = {
  data: null,
  loading: true,
  error: null,
};

function latestNotes(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_LATEST_NOTES_REQUEST":
      return Object.assign(state, { loading: true, error: null });
    case "FETCH_LATEST_NOTES_SUCCESS":
      return { data: action.data, loading: false, error: null };
    case "FETCH_LATEST_NOTES_FAILURE":
      return Object.assign(state, { loading: false, error: action.data });
    default:
      return state;
  }
}

export default latestNotes;
