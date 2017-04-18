import React from "react";
import { Field, reduxForm } from "redux-form";

const errorMessage = "There was an error saving your note."

// TODO: rename 'error' 'server error'?
// TODO: how to do button groups with redux-form

function NewNote({ handleSubmit, error }) {
  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{errorMessage}</p>}

      <Field name="text" component={renderField} validate={required} />
    </form>
  );
}

function renderField({ input, meta: { touched, error }}) {
  return (
    <div>
      <div className="flex">
        <input type="text" {...input} />
        <button type="submit" className="button-secondary">
          Post
        </button>
      </div>
      {touched && error && <p>{error}</p>}
    </div>
  )
}

function required(value) {
  return (value ? undefined : "Required");
}

function onSubmit({ text }, _dispatch, { createNote, reset}) {
  createNote(text);
  reset();
}

export default reduxForm({
  form: "newNote",
  onSubmit,
})(NewNote);
