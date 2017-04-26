import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get as getProfile } from "../actions/profile";
import ProfileComponent from "../components/profile";

function mapStateToProps({ profile: { data: user, loading, error } }) {
  return { user, loading, error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProfile }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
