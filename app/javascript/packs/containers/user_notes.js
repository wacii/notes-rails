import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { destroy as destroyNote } from "../actions/notes";
import NoteListComponent from "../components/note_list";
import currentUserNotes from "./current_user_notes";

function mapStateToProps({ notes: { data: notes, error, fetching }}) {
  return { notes, error, fetching };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ destroyNote }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(currentUserNotes(NoteListComponent));
