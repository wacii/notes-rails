import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import injectAuth from "../stores/inject_auth";
import EmailField from "./email_field";
import PasswordField from "./password_field";
import PasswordConfirmationField from "./password_confirmation_field";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      email: {
        value: "",
        valid: false,
      },
      password: {
        value: "",
        valid: false,
      },
      passwordConfirmation: {
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
    const passwordConfirmation = this.state.passwordConfirmation.value;
    const { signUp } = this.props;

    if (typeof this.cancelRequest === "function")
      this.cancelRequest();
    this.setState({ loading: true, error: false });

    const { cancel, promise } = signUp(email, password, passwordConfirmation);
    this.cancelRequest = cancel;
    promise
      .then(_response => {
        this.setState({ loading: false });
      })
      .catch(_response => this.setState({ loading: false, error: true }));

    event.preventDefault();
  };

  updateField(name) {
    return data => this.setState({ [name]: event.target.value });
  }

  componentWillUnmount() {
    if (typeof this.cancelRequest === "function")
      this.cancelRequest();
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;
    const isValid =
      (email.valid && password.valid && passwordConfirmation.valid);

    return (
      <form onSubmit={this.submit}>
        <EmailField
          value={email.value}
          onChange={this.updateField("email")} />

        <PasswordField
          value={password.value}
          onChange={this.updateField("password")} />

        <PasswordConfirmationField
          value={passwordConfirmation.value}
          password={password.value}
          onChange={this.updateField("passwordConfirmation")} />

        <button type="submit" disabled={!isValid}>
          Sign up
        </button>

        <Link to="/sign_in">
          Sign in
        </Link>
      </form>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
};

export default injectAuth(SignUp);
