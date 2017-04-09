import React, { Component } from "react";
import { signIn, signOut, signUp, subscribe } from "./auth";

function injectAuth(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        signedIn: false,
      };
      this.updateAuth = this.updateAuth.bind(this);
    }

    componentDidMount() {
      this.unsubscribe = subscribe(this.updateAuth);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    updateAuth(signedIn) {
      this.setState({ signedIn });
    }

    render() {
      const { signedIn } = this.state;

      return (
        <WrappedComponent
          signedIn={signedIn}
          signIn={signIn}
          signOut={signOut}
          signUp={signUp}
          {...this.props} />
      );
    }
  }
}

export default injectAuth;
