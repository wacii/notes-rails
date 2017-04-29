import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

// TODO: setup due in x days

function NoteItem({ note }) {
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

function NoteList({ notes, loading, error }) {
  if (loading)
    return (
      <p>Loading...</p>
    );

  const noteItems = notes.map(note => (
    <NoteItem
      key={note.id}
      note={note} />
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

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteList;
