import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { destroy as destroyNote } from "../actions/notes";
import NoteListComponent from "../components/note_list";

function mapStateToProps({ notes: { data: notes } }) {
  return { notes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ destroyNote }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteListComponent);
