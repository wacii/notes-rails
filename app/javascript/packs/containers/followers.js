import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { followers as fetch } from "../actions/users";
import UserList from "../components/user_list";

function mapStateToProps(state) {
  const { data: { currentUserId, userFollowers } } = state;
  const { followers: { loading, error } } = state;
  const users = userFollowers[currentUserId];
  return { users, loading, error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
