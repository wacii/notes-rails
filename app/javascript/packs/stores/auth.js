import * as api from "../api/auth";

let signedIn = false;

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("auth");
  const email = el.getAttribute("data-email");
  signedIn = !!email;
  broadcast();
});

function signIn(email, password) {
  const { cancel, promise } = api.signIn(email, password);
  promise.then(() => {
    signedIn = true;
    broadcast();
  });
  return { cancel, promise };
}

function signOut() {
  signedIn = false;
  broadcast();
  return api.signOut();
}

function signUp(email, password, passwordConfirmation) {
  const { cancel, promise } = api.signUp(email, password, passwordConfirmation);
  promise.then(() => {
    signedIn = true;
    broadcast();
  });
  return { cancel, promise };
}

const listeners = [];

function subscribe(listener) {
  listener(signedIn);

  listeners.push(listener);

  return () => {
    const i = listeners.indexOf(listener);
    listeners.splice(i, 1);
  }
}

function broadcast() {
  listeners.forEach(fn => fn(signedIn));
}

export {
  signIn,
  signOut,
  signUp,
  subscribe,
};
