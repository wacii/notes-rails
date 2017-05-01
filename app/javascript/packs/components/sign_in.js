import React from "react";
import { reduxForm, Field } from "redux-form";
import ButtonLink from "./button_link";
import Input from "./input";
import { email, required, min, max } from "../utils/validations";

function SignIn({ handleSubmit, submitting, router }) {
  return (
    <section>
      <div className="landing-title">
        Sign in
      </div>

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

        <button type="submit" className="button-primary" disabled={submitting}>
          Sign In
        </button>

        <ButtonLink to="/sign-up" className="button-secondary">
          Sign up
        </ButtonLink>
      </form>
    </section>
  )
}

function onSubmit({ email, password }, _dispatch, { signIn }) {
  signIn(email, password);
}

export default reduxForm({
  form: "signIn",
  onSubmit,
})(SignIn);
