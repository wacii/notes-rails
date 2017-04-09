import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import injectAuth from "../stores/inject_auth";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      email: "",
      password: "",
      passwordConfirmation: "",
    };

    this.submit = this.submit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  submit(event) {
    const { email, password, passwordConfirmation } = this.state;
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
    return event => this.setState({ [name]: event.target.value });
  }

  componentWillUnmount() {
    if (typeof this.cancelRequest === "function")
      this.cancelRequest();
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;

    return (
      <form onSubmit={this.submit}>
        <label>
          Email:
          <input type="text"
                 name="email"
                 value={email}
                 onChange={this.updateField("email")} />
        </label>

        <label>
          Password:
          <input type="password"
                 name="password"
                 value={password}
                 onChange={this.updateField("password")} />
        </label>

        <label>
          Password confirmation:
          <input type="password"
                 name="password-confirmation"
                 value={passwordConfirmation}
                 onChange={this.updateField("passwordConfirmation")} />
        </label>

        <button type="submit">
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
