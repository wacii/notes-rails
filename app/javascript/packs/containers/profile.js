import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get as getProfile } from "../actions/users";
import { create as createFollow } from "../actions/follows";
import ProfileComponent from "../components/profile";

function mapStateToProps(state) {
  const { data: { currentUserId, users } } = state;
  const { profile: { loading, error } } = state;
  const user = users[currentUserId];
  return { user, loading, error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProfile, createFollow }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
