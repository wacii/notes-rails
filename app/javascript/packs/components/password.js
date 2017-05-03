import React from "react";
import { reduxForm, Field } from "redux-form";
import Input from "./input";
import { required, confirm, min, max } from "../utils/validations";

function Password({ handleSubmit, password }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field type="password"
        name="password"
        component={Input}
        validate={[required, min(8), max(25)]}
        label="Password" />

      <Field type="password"
        name="password_confirmation"
        component={Input}
        validate={[required, confirm(password)]}
        label="Confirm Password" />

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
  const { password, password_confirmation, current_password } = values;
  props.updateSettings({ password, password_confirmation, current_password });
}

export default reduxForm({
  form: "settingsPassword",
  onSubmit,
})(Password);
