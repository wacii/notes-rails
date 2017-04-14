import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signUp } from "../actions/auth";
import SignUpComponent from "../components/sign_up";

function mapStateToProps({ auth }) {
  return auth;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signUp }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpComponent);
