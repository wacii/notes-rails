import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import Input from "./input";
import { email, required, min, max, confirm } from "../utils/validations";

function SignUp({ handleSubmit, submitting, password }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field type="text"
        name="username"
        component={Input}
        validate={required}
        label="Username" />

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

      <Field type="password"
        name="password_confirmation"
        component={Input}
        validate={confirm(password)}
        label="Password confirmation" />

      <button type="submit" disabled={submitting}>
        Sign up
      </button>

      <Link to="/sign_in">
        Sign in
      </Link>
    </form>
  );
}

function onSubmit(values, _dispatch, { signUp }) {
  const { username, email, password, passwordConfirmation } = values;
  signUp(username, email, password, passwordConfirmation);
}

export default reduxForm({
  form: "signUp",
  onSubmit,
})(SignUp);
