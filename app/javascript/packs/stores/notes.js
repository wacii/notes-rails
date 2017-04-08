// NOTE: should auth move over to something like this?

import { create, destroy, update } from "../api/notes.js";

const notes = [];

function createNote(text) {
  const { cancel, promise } = create(text);
  promise.then(({ data }) => {
    notes.push(data.note);
  });
  broadcast();
  return { cancel, promise };
}

function destroyNote(id) {
  const i = notes.findIndex(note => note.id === id)
  notes.splice(i, 1);
  broadcast();
  return destroy(id);
}

function updateNote(id, attributes) {
  const note = notes.find(note => note.id === id);
  for (key in attributes)
    note[key] = attributes[key];
  broadcast();
  return update(id, attributes);
}

const listeners = [];

function register(listener) {
  listenerns.push(listener);
  return () => {
    const i = listeners.indexOf(listener);
    listeners.splice(i, 1);
  }
}

function broadcast() {
  const copy = [...notes];
  listeners.forEach(fn => fn(copy));
}

export {
  createNote,
  destroyNote,
  updateNote,
  register,
};
