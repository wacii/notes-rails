import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NoteListComponent from "../components/note_list";
import { fetch as fetchNotes } from "../actions/notes";
import { idFromParamsSelector, userNotesSelector } from "../selectors";

function mapStateToProps(state, props) {
  return {
    userId: idFromParamsSelector(state, props),
    notes: userNotesSelector(state, props),
  };
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
