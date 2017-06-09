import React, { Component } from "react";
import { Link } from "react-router-dom";

function CurrentNote({ currentNote, loading, error, destroyNote, keepNote }) {
  function keepCurrentNote() {
    keepNote(currentNote.id, currentNote.interval);
  }

  function destroyCurrentNote() {
    destroyNote(currentNote.id);
  }

  if (currentNote == null)
    return (
      <div className="empty">
        <h4 className="empty-title">There are no notes to review.</h4>
      </div>
    );

  return (
    <div>
      <div className="note">
        <Link to={`/profiles/${currentNote.user_id}/notes`} className="user">
          @{currentNote.author}
        </Link>
        <p>{currentNote.text}</p>
      </div>

      <div className="button-group">
        <button className="button-primary" onClick={keepCurrentNote}>
          Keep
        </button>

        <button
          className="button-secondary float-right"
          onClick={destroyCurrentNote}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CurrentNote;
