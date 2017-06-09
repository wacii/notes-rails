import React from "react";
import PropTypes from "prop-types";

function Input({ input, label, type, meta: { touched, error } }) {
  return (
    <fieldset>
      <label>{label}</label>
      <input type={type} {...input} placeholder={label} />
      {touched && error && <p>{error}</p>}
    </fieldset>
  )
}

Input.propTypes = {
  props: PropTypes.shape({
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    meta: PropTypes.shape({
      touched: PropTypes.bool.isRequired,
      error: PropTypes.string.isRequired,
    }),
  }),
}

export default Input;
