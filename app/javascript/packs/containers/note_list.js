import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NoteListComponent from "../components/note_list";
import { fetch as fetchNotes } from "../actions/notes";

function mapStateToProps(state, props) {
  const { data: { userNotes } } = state;
  const { match: { params: { id } } } = props;
  const notes = userNotes[id] || [];
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
