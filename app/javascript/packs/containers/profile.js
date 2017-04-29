import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get as getProfile } from "../actions/users";
import { create as createFollow } from "../actions/follows";
import ProfileComponent from "../components/profile";

// FIXME: how to pull data off state? how to get current user id?

function mapStateToProps({ profile: { data: user, loading, error } }) {
  return { user, loading, error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProfile, createFollow }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
