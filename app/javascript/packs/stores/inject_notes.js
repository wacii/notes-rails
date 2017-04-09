import React, { Component } from "react";
import { create, destroy, update, register } from "./notes";

function injectNotes(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        notes: [],
      };

      this.updateNotes = this.updateNotes.bind(this);
    }

    updateNotes(notes) {
      this.setState({ notes });
    }

    componentDidMount() {
      this.unregister = register(this.updateNotes);
    }

    componentWillUnmount() {
      this.unregister();
    }

    render() {
      return (
        <WrappedComponent
          notes={this.state.notes}
          createNote={create}
          destroyNote={destroy}
          updateNote={update}
          {...this.props} />
      );
    }
  }
}

export default injectNotes;
