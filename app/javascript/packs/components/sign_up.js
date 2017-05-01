import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import Input from "./input";
import { email, required, min, max, confirm } from "../utils/validations";

function SignUp({ handleSubmit, submitting, password }) {
  return (
    <section>
      <div className="landing-title">
        Sign up
      </div>

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

        <button type="submit" disabled={submitting} className="button-primary">
          Sign up
        </button>

        <Link to="/sign_in" className="button-secondary">
          Sign in
        </Link>
      </form>
    </section>
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
