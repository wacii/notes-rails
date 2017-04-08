import React, { Component, PropTypes } from "react";
import { createNote } from "../stores/notes";

function ErrorAlert({ children }) {
  return (
    <p className="error banner">
      {children}
    </p>
  );
}

// TODO: validate presence of text

class NewNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      error: false,
    };

    this.submit = this.submit.bind(this);
  }

  submit(event) {
    const { text } = this.state;
    const { addNote } = this.props;

    if (this.cancelRequest)
      this.cancelRequest();

    const { cancel, promise } = createNote(text);
    this.cancelRequest = cancel;
    promise.catch(_request => this.setState({ error: true }));

    if (addNote)
      addNote(text);
    this.setState({ text: "", error: false });

    event.preventDefault();
  }

  componentWillUnmount() {
    if (this.cancelRequest)
      this.cancelRequest();
  }

  render() {
    const { text, error } = this.state;
    const errorMessage = "There was an error saving your note."

    return (
      <form onSubmit={this.submit}>
        {error && <ErrorAlert>{errorMessage}</ErrorAlert>}

        <textarea
          name="text"
          value={text}
          onChange={event => this.setState({ text: event.target.value})} />

        <button type="submit">
          Create note
        </button>
      </form>
    );
  }
}

NewNote.propTypes = {
  addNote: PropTypes.func,
}

export default NewNote;
