const defaultState = [];

function latestNotes(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_LATEST_NOTES_SUCCESS":
      return action.data.slice();
    default:
      return state;
  }
}

export default latestNotes;
