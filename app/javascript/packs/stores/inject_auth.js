import React, { Component } from "react";
import { signIn, signOut, signUp, subscribe } from "./auth";

function injectAuth(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        signedIn: false,
        loading: false,
        error: false,
        message: null,
      };
      this.updateAuth = this.updateAuth.bind(this);
    }

    componentDidMount() {
      this.unsubscribe = subscribe(this.updateAuth);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    updateAuth(data) {
      this.setState(data);
    }

    render() {
      return (
        <WrappedComponent
          signIn={signIn}
          signOut={signOut}
          signUp={signUp}
          {...this.state}
          {...this.props} />
      );
    }
  }
}

export default injectAuth;
