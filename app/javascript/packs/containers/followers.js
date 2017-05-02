import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { followers as fetch } from "../actions/users";
import UserList from "../components/user_list";

function mapStateToProps(state, props) {
  const { match: { params: { id } } } = props;
  const { data: { userFollowers } } = state;
  const { followers: { loading, error } } = state;
  const users = userFollowers[id];
  return { users, loading, error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
