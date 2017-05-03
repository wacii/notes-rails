import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { formValueSelector } from "redux-form";
import PasswordComponent from "../components/password";
import { update as updateSettings } from "../actions/auth";

const selector = formValueSelector("settingsPassword");

function mapStateToProps(state) {
  const password = selector(state, "password");
  return { password };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSettings }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordComponent);
