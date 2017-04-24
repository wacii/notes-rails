import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { destroy as destroyNote, keep as keepNote} from "../actions/notes";
import CurrentNoteComponent from "../components/current_note";

function mapStateToProps({ notes: { data: notes } }) {
  const today = new Date;
  const currentNote = notes
    .filter(note => note.review_after < today)
    .sort(note => note.review_after)[0];
  return { currentNote };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ destroyNote, keepNote }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentNoteComponent);
