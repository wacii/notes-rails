import React from "react";
import { Field, reduxForm } from "redux-form";

const errorMessage = "There was an error saving your note."

// TODO: rename 'error' 'server error'?

function NewNote({ handleSubmit, error }) {
  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{errorMessage}</p>}

      <Field name="text" component={renderField} validate={required} />

      <button type="submit">
        Create note
      </button>
    </form>
  );
}

function renderField({ input, meta: { touched, error }}) {
  return (
    <div>
      <textarea {...input} />
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
