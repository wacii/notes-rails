import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import injectNotes from "../stores/inject_notes";

function NoteItem({ note, destroy }) {
  return (
    <li>
      {note.text}
      <button onClick={destroy}>
        &times;
      </button>
    </li>
  );
}

class NoteList extends Component {
  render() {
    const { notes, destroyNote } = this.props;

    const noteItems = notes.map(note => (
      <NoteItem
        key={note.id}
        note={note}
        destroy={() => destroyNote(note.id)} />
    ));

    return (
      <div>
        <h1>Notes</h1>
        <ul>{noteItems}</ul>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  destroyNote: PropTypes.func.isRequired,
};

export default injectNotes(NoteList);
