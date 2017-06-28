import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { reduxForm } from "redux-form";
import AccountComponent from "../components/account";
import { update } from "../actions/auth";
import { currentUserSelector } from "../selectors";

function onSubmit(values, dispatch, props) {
  const { email, username, current_password } = values;
  dispatch(update({ email, username, current_password }));
}

function mapStateToProps(state) {
  return {
    user: currentUserSelector(state),
  };
}

export default compose(
  reduxForm({ form: "settingsAccount", onSubmit }),
  connect(mapStateToProps)
)(AccountComponent);
