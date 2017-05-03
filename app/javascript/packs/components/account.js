import React from "react";
import { reduxForm, Field } from "redux-form";
import Input from "./input";
import { email, required, min, max } from "../utils/validations";

function Account({ handleSubmit }) {
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
        name="current_password"
        component={Input}
        validate={[required, min(8), max(25)]}
        label="Current Password" />

      <button type="submit" className="button-primary">
        Save
      </button>
    </form>
  );
}

function onSubmit(values, _dispatch, props) {
  const { email, username, current_password } = values;
  props.updateSettings({ email, username, current_password });
}

export default reduxForm({
  form: "settingsAccount",
  onSubmit,
})(Account);
