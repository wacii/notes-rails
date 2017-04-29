import { connect } from "react-redux";
import NoteListComponent from "../components/note_list";

// FIXME: how to pull data off state? how to get current user id?

function mapStateToProps({ notes: { data: notes } }) {
  return { notes };
}

export default connect(
  mapStateToProps,
  () => ({})
)(NoteListComponent);
