import axios from "axios";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { reset } from 'redux-form';

import { signIn, signOut, signUp, update } from "../auth";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const email = "email@example.com";
const password = "password";

const csrfToken = "abc";
const headers = { "x-csrf-token": csrfToken };
const data = { key: "value" };
const body = JSON.stringify(data);

beforeEach(() => moxios.install(axios));
afterEach(() => moxios.uninstall(axios));

// FIXME: test error paths

test("signIn() dispatches expected actions", () => {
  moxios.stubRequest("/users/sign_in", {
    headers,
    status: 200,
    response: body,
  });

  const store = mockStore();

  const expectedActions = [
    { type: "UPDATE_USERS", data },
    { type: "SET_CURRENT_USER", data }
  ];

  expect.assertions(2);
  store.dispatch(signIn(email, password)).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
    expect(axios.defaults.headers.common["X-CSRF-Token"]).toEqual(csrfToken);
  });
});

test("signOut() dispatches expected actions", () => {
  moxios.stubRequest("/users/sign_out", {
    headers,
    status: 200,
    response: null,
  });

  const store = mockStore();

  const expectedActions = [
    { type: "SIGN_OUT_REQUEST" },
    { type: "SIGN_OUT_SUCCESS" },
  ];

  expect.assertions(2);
  store.dispatch(signOut()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
    expect(axios.defaults.headers.common["X-CSRF-Token"]).toEqual(csrfToken);
  });
});

test("signUp() dispatches expected actions", () => {
  moxios.stubRequest("/users", {
    headers,
    status: 201,
    response: body,
  });

  const store = mockStore();

  const expectedActions = [
    { type: "UPDATE_USERS", data },
    { type: "SET_CURRENT_USER", data }
  ];

  expect.assertions(2);
  store.dispatch(signUp(email, password, password)).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
    expect(axios.defaults.headers.common["X-CSRF-Token"]).toEqual(csrfToken);
  });
});

test("update() dispatches expected actions", () => {
  moxios.stubRequest("/users", {
    status: 200,
    response: body,
  });

  const currentUserId = 1;
  const store = mockStore({ data: { currentUserId }, form: {} });

  const expectedActions = [
    { type: "UPDATE_REGISTRATION_REQUEST", currentUserId, data },
    { type: "UPDATE_REGISTRATION_SUCCESS" },
    reset("settingsPassword")
  ];

  expect.assertions(1);
  store.dispatch(update(data)).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
})
