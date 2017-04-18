import React, { Component, PropTypes } from "react";

function CurrentNote({ notes, destroyNote, updateNote }) {
  const today = new Date;
  const currentNote = notes
    .filter(note => note.review_after < today)
    .sort(note => note.review_after)[0];

  function resetReviewAfter() {
    const interval = currentNote.interval + 1;
    const reviewAfter = new Date;
    reviewAfter.setDate(reviewAfter.getDate() + interval);

    const attributes = {
      interval,
      review_after: reviewAfter,
    };

    updateNote(currentNote.id, attributes);
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

      <button className="button-primary delay" onClick={resetReviewAfter}>
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
