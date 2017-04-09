// NOTE: should auth move over to something like this?

import * as api from "../api/notes.js";

const notes = [];

function create(text) {
  const { cancel, promise } = api.create(text);
  promise.then(({ data }) => {
    notes.push(data);
    broadcast();
  });
  return { cancel, promise };
}

function destroy(id) {
  const i = notes.findIndex(note => note.id === id)
  notes.splice(i, 1);
  broadcast();
  return api.destroy(id);
}

function update(id, attributes) {
  const note = notes.find(note => note.id === id);
  for (key in attributes)
    note[key] = attributes[key];
  broadcast();
  return api.update(id, attributes);
}

const listeners = [];

function register(listener) {
  listeners.push(listener);
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
  create,
  destroy,
  update,
  register,
};
