import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { followed as fetch } from "../actions/users";
import UserList from "../components/user_list";

function mapStateToProps(state, props) {
  let { match: { params: { id } } } = props;
  let { data: { userFollowed, users } } = state;
  const { requests: { getFollowed: { loading, error } } } = state;
  id = parseInt(id, 10);
  userFollowed = userFollowed[id] || [];
  users = Object.values(users, {})
    .filter(user => userFollowed.indexOf(user.id) !== -1);
  return { users, loading, error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
