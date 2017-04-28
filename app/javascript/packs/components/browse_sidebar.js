import React from "react";
import { Link } from "react-router-dom";

function BrowseSidebar({ notes }) {
  return (
    <div className="card">
      <div className="card-top">
        <h2>
          Browse
          <Link to="/all" className="float-right">
            <small>See All</small>
          </Link>
        </h2>
      </div>

      <div className="card-content">
        {notes.map(note => (
          <div key={note.id} className="note">
            <p>{note.text}</p>
            <Link to={`/profile/${note.author_id}/notes`}>@{note.author}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseSidebar;
