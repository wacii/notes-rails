import React from "react";
import { Field } from "redux-form";

function PasswordConfirmationField() {
  return (
    <Field type="password"
      name="password_confirmation"
      component={renderField}
      validations={confirm}
      label="Password confirmation" />
  )
}

function renderField({ input, label, type, meta: { touched, error } }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} {...input} />
      {touched && error && <p>{error}</p>}
    </div>
  )
}

function confirm(password) {
  return value => {
    return (password === value ? undefined : "Does not match password");
  };
}

export default PasswordConfirmationField;
