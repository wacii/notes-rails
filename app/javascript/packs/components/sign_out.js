import React, { Component, PropTypes } from "react";
import injectAuth from "../stores/inject_auth";

class SignOut extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    const { signOut } = this.props;

    if (this.cancelRequest)
      this.cancelRequest();

    const { cancel, promise } = signOut();
    this.cancelRequest = cancel;

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

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default injectAuth(SignOut);
