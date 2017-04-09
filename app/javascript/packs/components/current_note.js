import React, { Component, PropTypes } from "react";
import injectNotes from "../stores/inject_notes";

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
        <p>{currentNote.text}</p>
      ) : (
        <p>There are no notes to review.</p>
      )}

      <button onClick={destroyCurrentNote}>
        Discard
      </button>

      <button onClick={resetReviewAfter}>
        Keep
      </button>
    </div>
  );
}

export default injectNotes(CurrentNote);
