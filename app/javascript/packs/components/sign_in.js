import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import injectAuth from "../stores/inject_auth";
import EmailField from "./email_field";
import PasswordField from "./password_field";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
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

    if (this.cancelRequest)
      this.cancelRequest();
    this.setState({ loading: true, error: false });

    const { cancel, promise } = signIn(email, password);
    this.cancelRequest = cancel;

    promise
      .then(_response => this.setState({ loading: false }))
      .catch(({ data }) => this.setState({ loading: false, error: data }));

    event.preventDefault();
  }

  updateField(name) {
    return data => this.setState({ [name]: data });
  }

  componentWillUnmount() {
    if (this.cancelRequest)
      this.cancelRequest();
  }

  render() {
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
};

export default injectAuth(SignIn);
