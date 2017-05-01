import { connect } from "react-redux";
import NoteListComponent from "../components/note_list";

function mapStateToProps(state, props) {
  const { data: { userNotes } } = state;
  const { match: { params: { id } } } = props;
  const notes = userNotes[id] || [];
  return { notes };
}

export default connect(
  mapStateToProps,
  () => ({})
)(NoteListComponent);
