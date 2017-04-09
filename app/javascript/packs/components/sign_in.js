import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import signIn from "../api/sign_in";

function ErrorMessage({ children }) {
  return <p className="error">{children}</p>;
}

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
    const validEmail = EmailField.re.test(value);

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
          <input type="text"
                 name="email"
                 value={value}
                 onChange={this.updateForm}
                 onBlur={this.touch} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </label>
      </div>
    );
  }
}

EmailField.re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

EmailField.propTypes = {
  value: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
}

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
          <input type="password"
                 name="password"
                 value={value}
                 onChange={this.updateForm}
                 onBlur={this.touch} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </label>
      </div>
    );
  }
}

PasswordField.propTypes = {
  value: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

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
    return data => this.setState({ [name]: data });
  }

  componentWillUnmount() {
    if (this.cancelRequest)
      this.cancelRequest();
  }

  render() {
    const { email, password } = this.state;
    const isValid = email.valid && password.valid;

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

SignIn.contextTypes = {
  toggleAuthenticated: PropTypes.func,
}

export default SignIn;
