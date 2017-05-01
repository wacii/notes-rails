import React, { Component, PropTypes } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(_event) {
    if (this.state.open) return;

    this.setState({ open: true });
    document.addEventListener("click", this.close);
  }

  close(event) {
    if (this.el.contains(event.target)) return;

    this.setState({ open: false });
    document.removeEventListener("click", this.close);
  }

  componentWillUnmount() {
    if (this.state.open)
      document.removeEventListener("click", this.close);
  }

  render() {
    const otherProps = Object.assign({}, this.props);
    delete otherProps.children;

    return (
      <div {...this.props} onClick={this.open} ref={el => this.el = el}>
        <div className={`dropdown-content ${this.state.open && "show"}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dropdown;
