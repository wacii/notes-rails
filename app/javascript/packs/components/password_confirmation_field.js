import React, { Component, PropTypes } from "react";

class PasswordConfirmationField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
      present: false,
      confirmed: false,
    };

    this.updateForm = this.updateForm.bind(this);
    this.touch = this.touch.bind(this);
  }

  updateForm(event) {
    const { password, update } = this.props;
    const { value } = event.target;
    const present = (value !== "");
    const confirmed = (value === password);

    this.setState({ present, confirmed });
    update(value, (present && confirmed));
  }

  touch() {
    this.setState({ touched: true });
  }

  render() {
    const { value } = this.props;
    const { touched, present, confirmed } = this.state;

    let error;
    if (touched && !present)
      error = "Password confirmation required";
    else if (touched && !confirmed)
      error = "Password does not match";
    else
      error = null;

    return (
      <div>
        <label>
          Password confirmation:
          <input
            type="password"
            name="password-confirmation"
            value={value}
            onChange={this.updateForm}
            onBlur={this.touch} />
        </label>
        {error && <p>{error}</p>}
      </div>
    );
  }
}

PasswordConfirmationField.propTypes = {
  value: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default PasswordConfirmationField;
