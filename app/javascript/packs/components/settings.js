import React from "react";
import { reduxForm, Field } from "redux-form";
import Input from "./input";
import { email, required, confirm } from "../utils/validations";

function Settings({ handleSubmit, password }) {
  return (
    <section>
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
          validate={required}
          label="Password" />

        <Field type="password"
          name="password_confirmation"
          component={Input}
          validate={[required, confirm(password)]}
          label="Confirm Password" />
      </form>
    </section>
  );
}

function onSubmit(values, _dispatch, props) {
  // TODO
}

export default reduxForm({
  form: "settings",
  onSubmit,
})(Settings);
