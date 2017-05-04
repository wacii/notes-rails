import { connect } from "react-redux";
import { formValueSelector, reduxForm } from "redux-form";
import { signUp } from "../actions/auth";
import SignUpComponent from "../components/sign_up";

const selector = formValueSelector("signUp");

function mapStateToProps(state) {
  const password = selector(state, "password");
  return { password };
}

function onSubmit(values, dispatch) {
  const { username, email, password, password_confirmation } = values;
  return dispatch(signUp(username, email, password, password_confirmation));
}

export default reduxForm({
  form: "signUp",
  onSubmit,
})(connect(mapStateToProps)(SignUpComponent));
