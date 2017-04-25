import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { formValueSelector } from "redux-form";
import { signUp } from "../actions/auth";
import SignUpComponent from "../components/sign_up";

const selector = formValueSelector("signUp");

function mapStateToProps(state) {
  const { auth } = state;
  const password = selector(state, "password");
  
  return Object.assign({}, auth, { password });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signUp }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpComponent);
