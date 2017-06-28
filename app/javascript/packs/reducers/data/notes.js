const defaultState = {};

let id, note, notes;

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_NOTES_SUCCESS":
      notes = action.payload.reduce((obj, item) => {
        note = Object.assign({}, item);
        obj[note.id] = note;
        note.review_after = new Date(note.review_after);
        return obj;
      }, {});
      return Object.assign({}, state, notes);

    case "CREATE_NOTE_SUCCESS":
      note = Object.assign({}, action.payload);
      note.review_after = new Date(note.review_after);
      return Object.assign({}, state, { [note.id]: note });

    case "UPDATE_NOTE_REQUEST":
      const { id, attributes } = action;
      note = Object.assign({}, state[id], attributes);
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
