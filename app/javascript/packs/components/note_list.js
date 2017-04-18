import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

// TODO: setup due in x days

function NoteItem({ note, destroy }) {
  return (
    <tr>
      <td>{note.text}</td>
      <td>
        <Link to="#">You</Link>
      </td>
      <td>6 days</td>
    </tr>
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
      <table>
        <thead>
          <tr>
            <th>Note</th>
            <th>From</th>
            <th>Due</th>
          </tr>
        </thead>

        <tbody>
          {noteItems}
        </tbody>
      </table>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  destroyNote: PropTypes.func.isRequired,
};

export default NoteList;
