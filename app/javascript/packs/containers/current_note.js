import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { destroy as destroyNote, keep as keepNote} from "../actions/notes";
import CurrentNoteComponent from "../components/current_note";
import currentUserNotes from "./current_user_notes";

function mapStateToProps(state) {
  const { notes: { error, loading } } = state;
  const { data: { currentUserId, userNotes } } = state;
  const notes = userNotes[currentUserId] || [];

  const today = new Date;
  notes.forEach(note => note.review_after = new Date(note.review_after))
  const currentNote = notes
    .filter(note => note.review_after < today)
    .sort(note => note.review_after)[0];
  return { currentNote, loading, error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ destroyNote, keepNote }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(currentUserNotes(CurrentNoteComponent));
