import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signOut } from "../actions/auth";
import SignOutComponent from "../components/sign_out";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signOut }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SignOutComponent);
