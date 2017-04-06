import React, { Component, PropTypes } from "react";
import signIn from "../api/sign_in";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
      email: "",
      password: "",
    };

    this.submit = this.submit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  submit(event) {
    const { email, password } = this.state;
    const { toggleAuthenticated } = this.context;

    if (this.cancelRequest)
      this.cancelRequest();
    this.setState({ loading: true, error: false });

    const { cancel, promise } = signIn(email, password);
    this.cancelRequest = cancel;

    promise
      .then(_response => {
        this.setState({ loading: false });
        toggleAuthenticated(true);
      })
      .catch(({ data }) => this.setState({ loading: false, error: data }));

    event.preventDefault();
  }

  updateField(name) {
    return event => this.setState({ [name]: event.target.value });
  }

  componentWillUnmount() {
    if (this.cancelRequest)
      this.cancelRequest();
  }

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.submit}>
        <label>
          Email:
          <input type="text"
                 name="email"
                 value={email}
                 onChange={this.updateField("email")}/>
        </label>

        <label>
          Password:
          <input type="password"
                 name="password"
                 value={password}
                 onChange={this.updateField("password")}/>
        </label>

        <button type="submit">
          Sign In
        </button>
      </form>
    )
  }
}

SignIn.contextTypes = {
  toggleAuthenticated: PropTypes.func,
}

export default SignIn;
