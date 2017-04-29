const defaultState = {};

let note, notes, userId;

function userNotes(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_NOTES_SUCCESS":
      notes = action.data;
      return Object.assign({}, state, { [action.id]: notes });

    case "CREATE_NOTE_SUCCESS":
      note = action.data;
      userId = note.user_id;
      notes = state[userId];
      return Object.assign({}, state, { [userId]: notes.concat([note]) });
    case "UPDATE_NOTE_SUCCESS":
      note = action.data;
      userId = note.user_id;
      notes = state[userId].map(current => (
        note.id === current.id ? note : current
      ));
      return Object.assign({}, state, { [userId]: notes });
    case "DESTROY_NOTE_SUCCESS":
      note = action.data;
      userId = note.user_id;
      notes = state[userId].filter(current => (
        note.id !== current.id
      ));
      return Object.assign({}, state, { [userId]: notes });

    default:
      return state;
  }
}

export default userNotes;
