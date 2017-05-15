const defaultState = {
  loading: true,
  error: null,
};

function notesReducer(state = defaultState, action) {
  switch (action.type) {
    case "SIGN_OUT_SUCCESS":
      return Object.assign({}, defaultState);

    case "FETCH_NOTES_REQUEST":
      return Object.assign(
        {},
        state,
        { loading: true, error: null }
      );
    case "FETCH_NOTES_SUCCESS":
      return Object.assign(
        {},
        state,
        {loading: false, error: null }
      );
    case "FETCH_NOTES_FAILURE":
      return Object.assign(
        {},
        state,
        { loading: false, error: action.payload }
      );

    case "DESTROY_NOTE_REQUEST":
      return Object.assign({}, state, { error: null });
    case "DESTROY_NOTE_SUCCESS":
      return Object.assign({}, state, { error: null });
    case "DESTROY_NOTE_FAILURE":
      return Object.assign({}, state, { error: action.payload });

    case "UPDATE_NOTE_REQUEST":
      return Object.assign({}, state, { error: null });
    case "UPDATE_NOTE_SUCCESS":
      return Object.assign({}, state, { error: null });
    case "UPDATE_NOTE_FAILURE":
      return Object.assign({}, state, { error: action.payload });

    default:
      return state;
  };
}

export default notesReducer;
