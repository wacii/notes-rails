import React, { Component, PropTypes } from "react";

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: props.signedIn,
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
    const { signedIn } = this.state;
    return this.props.children(signedIn);
  }
}

Session.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
};

Session.childContextTypes = {
  signedIn: PropTypes.bool,
  toggleAuthenticated: PropTypes.func,
};

export default Session;
