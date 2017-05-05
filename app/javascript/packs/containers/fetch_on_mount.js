import React, { Component } from "react";

// FIXME: no good

function fetchOnMount(WrappedComponent) {
  return class extends Component {
    componentWillMount() {
      this.props.fetch();
    }

    render() {
      const otherProps = Object.assign({}, this.props);
      delete otherProps.fetch;
      return <WrappedComponent {...otherProps} />;
    }
  }
}

export default fetchOnMount;
