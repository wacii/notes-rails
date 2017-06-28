import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { followers as fetch } from "../actions/users";
import UserList from "../components/user_list";
import { requestsSelector, userFollowersSelector } from "../selectors";

function mapStateToProps() {
  return (state, props) => (
    Object.assign({}, requestsSelector("fetchUserFollowers")(state), {
      users: userFollowersSelector(state, props),
    })
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
