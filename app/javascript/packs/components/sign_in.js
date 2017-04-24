import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import Input from "./input";
import { email, required, min, max } from "../utils/validations";

function SignIn({ handleSubmit, submitting }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field type="email"
        name="email"
        component={Input}
        validate={email}
        label="Email" />


      <Field type="password"
        name="password"
        component={Input}
        validate={[required, min(8), max(25)]}
        label="Password" />

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
