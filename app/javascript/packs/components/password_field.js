import React from "react";
import { Field } from "redux-form";

function PasswordField() {
  return (
    <Field type="password"
      name="password"
      component={renderField}
      validate={[required, min(8), max(25)]}
      label="Password" />
  );
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

function required(value) {
  return (value ? undefined : "Required");
}

function min(length) {
  return value => {
    return (value && value.length < length
      ? `Must be at least ${length}`
      : undefined
    );
  };
}

function max(length) {
  return value => {
    return (value && length < value.length
      ? `Must be at most ${length}`
      : undefined
    );
  };
}

export default PasswordField;
