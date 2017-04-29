import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { destroy as destroyNote, keep as keepNote} from "../actions/notes";
import CurrentNoteComponent from "../components/current_note";
import currentUserNotes from "./current_user_notes";

function mapStateToProps({ notes: { data: notes, loading, error } }) {
  const today = new Date;
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
