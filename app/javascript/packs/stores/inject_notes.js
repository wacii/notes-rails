import React, { Component } from "react";
import { create, destroy, update, subscribe } from "./notes";

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
      this.unsubscribe = subscribe(this.updateNotes);
    }

    componentWillUnmount() {
      this.unsubscribe();
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
