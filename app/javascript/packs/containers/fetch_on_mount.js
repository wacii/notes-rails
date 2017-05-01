import React, { Component } from "react";

function fetchOnMount(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const otherProps = this.props;
      delete otherProps.fetch;
      return <WrappedComponent {...otherProps} />;
    }
  }
}

export default fetchOnMount;
