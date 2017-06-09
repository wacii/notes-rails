import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { Link } from "react-router-dom";
import Input from "./input";
import { email, required, min, max, confirm } from "../utils/validations";

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
          <button className="button button-primary"
            disabled={submitting} >
            Sign up
          </button>

          <Link to="/sign-in" className="button button-secondary">
            Sign in
          </Link>
        </fieldset>
      </form>
    </section>
  );
}

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.object,
  password: PropTypes.string,
};

export default SignUp;
