import React from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import EmailField from "./email_field";
import PasswordField from "./password_field";
import PasswordConfirmationField from "./password_confirmation_field";

function SignUp({ handleSubmit, submitting }) {
  return (
    <form onSubmit={handleSubmit}>
      <EmailField />
      <PasswordField />
      <PasswordConfirmationField />

      <button type="submit" disabled={submitting}>
        Sign up
      </button>

      <Link to="/sign_in">
        Sign in
      </Link>
    </form>
  );
}

function onSubmit(props, _dispatch, { signUp }) {
  const { email, password, passwordConfirmation } = props;
  signUp(email, password, passwordConfirmation);
}

export default reduxForm({
  form: "signUp",
  onSubmit,
})(SignUp);
