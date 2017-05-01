import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { destroy as destroyNote, fetch as fetchNotes } from "../actions/notes";
import NoteListComponent from "../components/note_list";
import currentUserNotes from "./current_user_notes";

function mapStateToProps(state) {
  const { notes: { error, loading } } = state;
  const { data: { currentUserId, userNotes } } = state;
  const notes = userNotes[currentUserId] || [];

  return { userId: currentUserId, notes, error, loading };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNotes, destroyNote }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { userId } = stateProps;
  const { destroyNote, fetchNotes } = dispatchProps;
  const dispatchPropsWithState = {
    destroyNote,
    fetch: () => fetchNotes(userId),
  };

  return Object.assign({}, stateProps, dispatchPropsWithState, ownProps);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(currentUserNotes(NoteListComponent));
