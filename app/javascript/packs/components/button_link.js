import React, { Component, PropTypes } from "react";

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class ButtonLink extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.props.onClick)
      this.props.onClick(event);

    if (
      !event.defaultPrevented &&
      event.button === 0 &&
      !this.props.target &&
      !isModifiedEvent(event)
    ) {
      event.preventDefault()

      const { history } = this.context.router;
      const { replace, to } = this.props;

      if (replace)
        history.replace(to);
      else
        history.push(to);
    }
  }

  render() {
    const { to } = this.props;
    const otherProps = Object.assign({}, this.props);
    delete otherProps.replace;
    delete otherProps.to;

    return <button {...otherProps} onClick={this.handleClick} />;
  }
}

ButtonLink.propTypes = {
  onClick: PropTypes.func,
  target: PropTypes.string,
  replace: PropTypes.bool,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
};

ButtonLink.defaultProps = {
  replace: false,
};

ButtonLink.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
      createHref: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ButtonLink
