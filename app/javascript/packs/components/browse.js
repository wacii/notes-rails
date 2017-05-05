import React from "react";
import { Link } from "react-router-dom";

function Browse({ notes, loading, error }) {
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

export default Browse;
