import React, { Component, PropTypes } from "react";

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
    this.toggleAuthenticated = this.toggleAuthenticated.bind(this);
  }

  getChildContext() {
    return {
      signedIn: this.state.signedIn,
      toggleAuthenticated: this.toggleAuthenticated,
    };
  }

  toggleAuthenticated(signedIn) {
    this.setState({ signedIn });
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

Session.childContextTypes = {
  signedIn: PropTypes.bool,
  toggleAuthenticated: PropTypes.func,
}

export default Session;
