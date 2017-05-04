import React from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";
import Input from "./input";
import { email, required, min, max } from "../utils/validations";

// TODO: use button to submit, not link

function SignIn({ handleSubmit, submitting, error }) {
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

        <fieldset>
          <a className="button button-primary"
            onClick={handleSubmit}
            disabled={submitting}>
            Sign In
          </a>

          <Link to="/sign-up" className="button button-secondary">
            Sign up
          </Link>
        </fieldset>
      </form>
    </section>
  )
}

export default SignIn;
