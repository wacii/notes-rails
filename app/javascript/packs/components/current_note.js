import React, { Component, PropTypes } from "react";

function CurrentNote({ currentNote, destroyNote, keepNote }) {
  function keepCurrentNote() {
    keepNote(currentNote.id, currentNote.interval);
  }

  function destroyCurrentNote() {
    destroyNote(currentNote.id);
  }

  return (
    <div>
      {currentNote ? (
        <blockquote className="note-card">
          <p>{currentNote.text}</p>
        </blockquote>
      ) : (
        <p>There are no notes to review.</p>
      )}

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
