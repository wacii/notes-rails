import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { destroy as destroyNote, keep as keepNote} from "../actions/notes";
import CurrentNoteComponent from "../components/current_note";
import currentUserNotes from "./current_user_notes";
import { requestsSelector, currentNoteSelector } from "../selectors";

function mapStateToProps(state) {
  return Object.assign({}, requestsSelector("fetchNotes")(state), {
    currentNote: currentNoteSelector(state),
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ destroyNote, keepNote }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(currentUserNotes(CurrentNoteComponent));
