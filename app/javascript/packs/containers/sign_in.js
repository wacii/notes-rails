import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signIn } from "../actions/auth";
import SignInComponent from "../components/sign_in";

function mapStateToProps({ auth }) {
  return auth;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signIn }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInComponent);
