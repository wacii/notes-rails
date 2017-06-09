import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm } from "redux-form";
import AccountComponent from "../components/account";
import { update } from "../actions/auth";

function onSubmit(values, dispatch, props) {
  const { email, username, current_password } = values;
  dispatch(update({ email, username, current_password }));
}

function mapStateToProps(state) {
  const { data: { currentUserId, users } } = state;
  const { username, email } = users[currentUserId];
  const initialValues = { username, email };
  return { initialValues };
}

export default reduxForm({
  form: "settingsAccount",
  onSubmit,
})(connect(
  mapStateToProps,
  () => ({})
)(AccountComponent));
