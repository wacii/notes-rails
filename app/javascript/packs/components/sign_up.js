import React from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";
import Input from "./input";
import { email, required, min, max, confirm } from "../utils/validations";

// TODO: use button to submit, not Link

function SignUp({ handleSubmit, submitting, error, password }) {
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

        <fieldset>
          <a className="button button-primary"
            onClick={handleSubmit}
            disabled={submitting} >
            Sign up
          </a>

          <Link to="/sign-in" className="button button-secondary">
            Sign in
          </Link>
        </fieldset>
      </form>
    </section>
  );
}

export default SignUp;
