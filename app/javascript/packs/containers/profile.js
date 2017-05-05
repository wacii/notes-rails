import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get as getProfile } from "../actions/users";
import { create as createFollow } from "../actions/follows";
import ProfileComponent from "../components/profile";

function mapStateToProps(state, props) {
  const { match: { params: { id } } } = props;
  const { data: { users } } = state;
  const { users: { error, loading } } = state;
  const user = users[id];
  return { user, error, loading };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProfile, createFollow }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
