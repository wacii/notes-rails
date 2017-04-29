import { connect } from "react-redux";
import NoteListComponent from "../components/note_list";

function mapStateToProps({ notes: { data: notes } }) {
  return { notes };
}

export default connect(
  mapStateToProps,
  () => ({})
)(NoteListComponent);
