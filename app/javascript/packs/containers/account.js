import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AccountComponent from "../components/account";
import { update as updateSettings } from "../actions/auth";

function mapStateToProps(state) {
  const { data: { currentUserId, users } } = state;
  const { username, email } = users[currentUserId];
  const initialValues = { username, email };
  return { initialValues };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSettings }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountComponent);
