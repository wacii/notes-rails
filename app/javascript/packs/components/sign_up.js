import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import EmailField from "./email_field";
import PasswordField from "./password_field";
import PasswordConfirmationField from "./password_confirmation_field";

class SignUp extends Component {
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

    signUp(email, password, passwordConfirmation);

    event.preventDefault();
  };

  updateField(name) {
    return data => this.setState({ [name]: event.target.value });
  }

  render() {
    // TODO
    // const { loading, error } = this.props;
    const { email, password, passwordConfirmation } = this.state;
    const isValid =
      (email.valid && password.valid && passwordConfirmation.valid);

    return (
      <form onSubmit={this.submit}>
        <EmailField
          value={email.value}
          update={this.updateField("email")} />

        <PasswordField
          value={password.value}
          update={this.updateField("password")} />

        <PasswordConfirmationField
          value={passwordConfirmation.value}
          password={password.value}
          update={this.updateField("passwordConfirmation")} />

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
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

export default SignUp;
