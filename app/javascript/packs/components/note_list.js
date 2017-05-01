import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

// TODO: move dateToDays to util

const msInDay = 1000 * 60 * 60 * 24;

function dateToDays(dateObj) {
  const now = Date.now();
  const date = dateObj.getTime();

  if (date < now)
    return "Now"

  const days = Math.round((date - now) / (msInDay));
  return (days === 1 ? "1 day ago" : `${days} days ago`);
}

class NoteList extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { notes, loading, error } = this.props;

    if (loading)
      return (
        <p>Loading...</p>
      );

    return (
      <ul className="list-notes">
        {notes.map(note => (
          <li key={note.id}>
            <p>{note.text}</p>
            <small>{dateToDays(note.review_after)}</small>
          </li>
        ))}
      </ul>
    );
  }
}

NoteList.propTypes = {
  fetch: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
};

export default NoteList;
