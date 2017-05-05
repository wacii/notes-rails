const defaultState = {
  data: [],
  loading: true,
  error: null,
};

let data;

function notesReducer(state = defaultState, action) {
  switch (action.type) {
    case "SIGN_OUT_SUCCESS":
      return Object.assign({}, defaultState);

    case "FETCH_NOTES_REQUEST":
      return Object.assign(
        {},
        state,
        { data: [], loading: true, error: null }
      );
    case "FETCH_NOTES_SUCCESS":
      return Object.assign(
        {},
        state,
        { data: action.data, loading: false, error: null }
      );
    case "FETCH_NOTES_FAILURE":
      return Object.assign(
        {},
        state,
        { data: [], loading: false, error: action.data }
      );

    case "DESTROY_NOTE_REQUEST":
      data = state.data.filter(note => note.id !== action.id);
      return Object.assign({}, state, { data, error: null });
    case "DESTROY_NOTE_SUCCESS":
      return Object.assign({}, state, { error: null });
    case "DESTROY_NOTE_FAILURE":
      return Object.assign({}, state, { error: action.data });

    case "UPDATE_NOTE_REQUEST":
      data = state.data.map(note => {
        return (note.id === action.id
          ? Object.assign({}, note, action.data)
          : note
        );
      });
      return Object.assign({}, state, { data, error: null });
    case "UPDATE_NOTE_SUCCESS":
      return Object.assign({}, state, { error: null });
    case "UPDATE_NOTE_FAILURE":
      return Object.assign({}, state, { error: action.data });

    default:
      return state;
  };
}

export default notesReducer;
