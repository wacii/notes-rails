import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { destroy as destroyNote, update as updateNote} from "../actions/notes";
import CurrentNoteComponent from "../components/current_note";

function mapStateToProps({ notes: { data: notes } }) {
  return { notes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ destroyNote, updateNote }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentNoteComponent);
