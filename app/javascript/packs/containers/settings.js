import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { formValueSelector } from "redux-form";
import SettingsComponent from "../components/settings";

const selector = formValueSelector("settings");

function mapStateToProps(state) {
  const { data: { currentUserId, users } } = state;
  const { username, email } = users[currentUserId];
  const initialValues = { username, email };
  const password = formValueSelector(state, "password");
  return { initialValues, password };
}

function mapDispatchToProps(dispatch) {
  // TODO
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsComponent);
