import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// TODO: move dateToDays to util
// TODO: move fetch into container

const msInDay = 1000 * 60 * 60 * 24;

function dateToDays(dateObj) {
  const now = Date.now();
  const date = dateObj.getTime();

  if (date < now)
    return "Now"

  const days = Math.round((date - now) / msInDay);
  switch (days) {
    case 0:
      return "Less than a day";
    case 1:
      return "1 day";
    default:
      return `${days} days`;
  }
}

class NoteList extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { notes } = this.props;

    if (!notes)
      return null;

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
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      review_after: PropTypes.object.isRequired
    })
  ).isRequired,
};

export default NoteList;
