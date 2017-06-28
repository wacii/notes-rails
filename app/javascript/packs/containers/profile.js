import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get as getProfile } from "../actions/users";
import { create as createFollow } from "../actions/follows";
import ProfileComponent from "../components/profile";
import { requestsSelector, userSelector } from "../selectors";

function mapStateToProps(state, props) {
  return Object.assign({}, requestsSelector("getUser")(state), {
    user: userSelector(state, props),
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProfile, createFollow }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
