import React, { Component, PropTypes } from "react";

const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

class EmailField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      present: false,
      validEmail: false,
      touched: false,
    };

    this.updateForm = this.updateForm.bind(this);
    this.touch = this.touch.bind(this);
  }

  updateForm(event) {
    const value = event.target.value;

    const present = (value !== "");
    const validEmail = re.test(value);

    this.setState({ present, validEmail });
    this.props.update({ value, valid: present && validEmail });
  }

  touch() {
    this.setState({ touched: true });
  }

  render() {
    const { present, validEmail, touched } = this.state;
    const { value } = this.props;

    let error;
    if (!touched)
      error = null;
    else if (!present)
      error = "Email required";
    else if (!validEmail)
      error = "Email invalid";

    return (
      <div>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={value}
            onChange={this.updateForm}
            onBlur={this.touch} />
          {error && <p>{error}</p>}
        </label>
      </div>
    );
  }
}

EmailField.propTypes = {
  value: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
}

export default EmailField;
