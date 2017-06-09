import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";

function NewNote({ handleSubmit, submitting, error, post, share }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="note-add">
        <div className="input">
          <Field type="text"
            name="text"
            placeholder="Add note..."
            component="input" />
        </div>
        <div className="buttons">
          <button className="button-primary" onClick={post}>
            Add
          </button>
          <button className="button-secondary" onClick={share}>
            Share
          </button>
        </div>
      </div>
    </form>
  )
}

NewNote.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  error: PropTypes.object,
  post: PropTypes.func.isRequired,
  share: PropTypes.func.isRequired,
};

export default NewNote
