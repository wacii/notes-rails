import React, { Component, PropTypes } from "react";
import { signOut } from "../api/auth";

class SignOut extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    if (this.cancelRequest)
      this.cancelRequest();

    const { cancel, promise } = signOut();
    this.cancelRequest = cancel;

    this.context.toggleAuthenticated(false);

    // TODO: handle failure
  }

  componentWillUnmount() {
    if (this.cancelRequest)
      this.cancelRequest();
  }

  render() {
    return (
      <button onClick={this.signOut}>
        Sign Out
      </button>
    );
  }
}

SignOut.contextTypes = {
  toggleAuthenticated: PropTypes.func,
}

export default SignOut;
