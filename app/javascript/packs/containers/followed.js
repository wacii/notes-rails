import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { followed as fetch } from "../actions/users";
import UserList from "../components/user_list";

// FIXME: how to pull data off state? how to get current user id?

function mapStateToProps({ followed: { data: users, loading, error }}) {
  return { users, loading, error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
