// NOTE: should auth move over to something like this?

import * as api from "../api/notes.js";

let notes = [];

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
let hasNotFetched = true;

function register(listener) {
  if (hasNotFetched)
    fetch();

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

function fetch() {
  const { promise } = api.index();
  promise.then(({ data }) => {
    notes = data;
    hasNotFetched = false;
    broadcast();
  });
}

export {
  create,
  destroy,
  update,
  register,
};
