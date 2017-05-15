import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NoteListComponent from "../components/note_list";
import { fetch as fetchNotes } from "../actions/notes";

function mapStateToProps(state, props) {
  let { data: { notes } } = state;
  let { match: { params: { id } } } = props;
  id = parseInt(id, 10);
  notes = Object.values(notes || {})
    .filter(note => note.user_id === id);
  notes.forEach(note => note.review_after = new Date(note.review_after));
  return { userId: id, notes };
}

function mapDispatchToProps(dispatch, props) {
  const { match: { params: { id } } } = props;
  const fetch = () => fetchNotes(id);
  return bindActionCreators({ fetch }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteListComponent);
