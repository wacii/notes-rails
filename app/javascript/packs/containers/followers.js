import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { followers as fetch } from "../actions/users";
import UserList from "../components/user_list";

function mapStateToProps(state, props) {
  let { match: { params: { id } } } = props;
  let { data: { userFollowers, users } } = state;
  const { requests: { getFollowers: { loading, error } } } = state;
  id = parseInt(id, 10);
  userFollowers = userFollowers[id] || [];
  users = Object.values(users || {})
    .filter(user => userFollowers.indexOf(user.id) !== -1);
  return { users, loading, error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
