import React, { Component, PropTypes } from "react";

function CurrentNote({ currentNote, destroyNote, keepNote }) {
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
      <blockquote className="note-card">
        <p>{currentNote.text}</p>
      </blockquote>

      <button className="button-primary delay" onClick={keepCurrentNote}>
        Keep
      </button>

      <button className="button-secondary delay">Reset</button>

      <button
        className="button-secondary float-right remove"
        onClick={destroyCurrentNote}>
        Remove
      </button>
    </div>
  );
}

export default CurrentNote;
