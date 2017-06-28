import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { followed as fetch } from "../actions/users";
import UserList from "../components/user_list";
import { requestsSelector, userFollowedSelector } from "../selectors";

function mapStateToProps() {
  return (state, props) => (
    Object.assign({}, requestsSelector("getFollowed")(state), {
      users: userFollowedSelector(state, props),
    })
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
