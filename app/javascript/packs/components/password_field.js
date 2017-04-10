import React, { Component, PropTypes } from "react";

class PasswordField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
      present: false,
    };

    this.updateForm = this.updateForm.bind(this);
    this.touch = this.touch.bind(this);
  }

  updateForm(event) {
    const value = event.target.value;
    const present = (value !== "");
    this.setState({ present });
    this.props.update({ value, valid: present });
  }

  touch() {
    this.setState({ touched: true });
  }

  render() {
    const { present, touched } = this.state;
    const { value } = this.props;

    const error = (touched && !present ? "Password required" : null);

    return (
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={value}
            onChange={this.updateForm}
            onBlur={this.touch} />
        </label>
        {error && <p>{error}</p>}
      </div>
    );
  }
}

PasswordField.propTypes = {
  value: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default PasswordField;
