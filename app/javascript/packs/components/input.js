import React, { PropTypes } from "react";

function Input({ input, label, type, meta: { touched, error } }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} {...input} />
      {touched && error && <p>{error}</p>}
    </div>
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
