const defaultState = {};

let note, notes;

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_NOTES_SUCCESS":
      notes = action.payload.reduce((obj, note) => {
        obj[note.id] = note;
        return obj;
      }, {});
      return Object.assign({}, state, notes);

    case "CREATE_NOTE_SUCCESS":
      note = action.payload;
      return Object.assign({}, state, { [note.id]: note });

    case "UPDATE_NOTE_SUCCESS":
      note = action.payload;
      return Object.assign({}, state, { [note.id]: note });

    case "DESTROY_NOTE_REQUEST":
      let noteId = action.id
      notes = Object.assign({}, state)
      delete notes[noteId];
      return notes;

    default:
      return state;
  }
}

export default reducer;
