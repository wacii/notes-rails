import { reduxForm } from "redux-form";
import { signIn } from "../actions/auth";
import SignInComponent from "../components/sign_in";

function onSubmit(values, dispatch) {
  const { email, password } = values;
  return dispatch(signIn(email, password));
}

export default reduxForm({
  form: "signIn",
  onSubmit,
})(SignInComponent);
