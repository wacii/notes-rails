const defaultState = {};

let note, notes, userId;

function userNotes(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_NOTES_SUCCESS":
      notes = action.data;
      return Object.assign({}, state, { [action.id]: notes });

    case "CREATE_NOTE":
      note = action.data;
      note.review_after = new Date(note.review_after)
      userId = note.user_id;
      notes = state[userId];
      return Object.assign({}, state, { [userId]: notes.concat([note]) });
    case "UPDATE_NOTE_SUCCESS":
      note = action.data;
      note.review_after = new Date(note.review_after)
      userId = note.user_id;
      notes = state[userId].map(current => (
        note.id === current.id ? note : current
      ));
      return Object.assign({}, state, { [userId]: notes });
    case "DESTROY_NOTE_REQUEST":
      let noteId = action.id
      userId = action.userId;
      notes = state[userId].filter(current => (
        current.id !== noteId
      ));
      return Object.assign({}, state, { [userId]: notes });

    default:
      return state;
  }
}

export default userNotes;
