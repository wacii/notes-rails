import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { create as createNote } from "../actions/notes";
import NewNoteComponent from "../components/new_note";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNote }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(NewNoteComponent);
