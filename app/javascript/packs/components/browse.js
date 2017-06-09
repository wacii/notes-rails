import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Browse({ notes, loading, error }) {
  if (!notes)
    return null;

  return (
    <section>
      <ul className="list-notes">
        {notes.map(note => (
          <li key={note.id}>
            <Link to={`/profiles/${note.user_id}/notes`} className="user">
              @{note.author}
            </Link>
            <p>{note.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

Browse.propsTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
  error: PropTypes.object,
}

export default Browse;
