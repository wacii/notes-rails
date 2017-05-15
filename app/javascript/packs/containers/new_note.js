import { connect } from "react-redux";
import { reduxForm, change } from "redux-form";
import { create as createNote } from "../actions/notes";
import NewNoteComponent from "../components/new_note";

function mapDispatchToProps(dispatch) {
  return {
    post: () => dispatch(change("newNote", "public", false)),
    share: () => dispatch(change("newNote", "public", true)),
  };
}

function onSubmit(values, dispatch, props) {
  props.reset()
  return dispatch(createNote(values))
}

export default reduxForm({
  form: "newNote",
  onSubmit,
})(connect(
  null,
  mapDispatchToProps
)(NewNoteComponent));
