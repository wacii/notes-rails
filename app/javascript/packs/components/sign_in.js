import React from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import EmailField from "./email_field";
import PasswordField from "./password_field";

function SignIn({ handleSubmit, submitting }) {
  return (
    <form onSubmit={handleSubmit}>
      <EmailField />
      <PasswordField />

      <button type="submit" disabled={submitting}>
        Sign In
      </button>

      <Link to="/sign-up">
        Sign up
      </Link>
    </form>
  )
}

function onSubmit({ email, password }, _dispatch, { signIn }) {
  signIn(email, password);
}

export default reduxForm({
  form: "signIn",
  onSubmit,
})(SignIn);
