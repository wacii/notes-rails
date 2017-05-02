import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { followed as fetch } from "../actions/users";
import UserList from "../components/user_list";

function mapStateToProps(state, props) {
  const { match: { params: { id } } } = props;
  const { data: { userFollowed } } = state;
  const { followed: { loading, error } } = state;
  const users = userFollowed[id];
  return { users, loading, error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
