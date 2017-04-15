import React from "react";
import { Field } from "redux-form";

const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

function EmailField() {
  return (
    <Field type="email"
      name="email"
      component={renderField}
      validate={email}
      label="Email" />
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

function email(value) {
  return (value && re.test(value) ? undefined : "Invalid")
}

export default EmailField;
