import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import injectAuth from "../stores/inject_auth";
import EmailField from "./email_field";
import PasswordField from "./password_field";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: "",
        valid: false,
      },
      password: {
        value: "",
        valid: false,
      },
    };

    this.submit = this.submit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  submit(event) {
    const email = this.state.email.value;
    const password = this.state.password.value;
    const { signIn } = this.props;

    signIn(email, password);

    event.preventDefault();
  }

  updateField(name) {
    return data => this.setState({ [name]: data });
  }

  render() {
    // TODO
    // const { loading, error, message } = this.props;
    const { email, password } = this.state;
    const isValid = (email.valid && password.valid);

    return (
      <form onSubmit={this.submit}>
        <EmailField
          value={email.value}
          update={this.updateField("email")} />

        <PasswordField
          value={password.value}
          update={this.updateField("password")} />

        <button type="submit" disabled={!isValid}>
          Sign In
        </button>

        <Link to="/sign-up">
          Sign up
        </Link>
      </form>
    )
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

export default injectAuth(SignIn);
