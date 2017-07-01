import {
  fetch,
  fetchLatest,
  create,
  destroy,
  update,
  keep
} from "../notes";

const asyncWithRetries = {
  offline: {
    effect: expect.any(Object),
    commit: expect.any(Object),
    rollback: expect.any(Object)
  }
};

test("fetch() uses async with retries", () => {
  const userId = 1;
  const action = fetch(userId);
  expect(action.meta).toMatchObject(asyncWithRetries);
});

test("fetchLatest() uses async with retries", () => {
  const action = fetchLatest();
  expect(action.meta).toMatchObject(asyncWithRetries);
});

test("create() uses async with retries", () => {
  const attributes = {};
  const action = create(attributes);
  expect(action.meta).toMatchObject(asyncWithRetries);
});

test("destroy() uses async with retries", () => {
  const id = 1;
  const action = destroy(id);
  expect(action.meta).toMatchObject(asyncWithRetries);
});

test("update() uses async with retries", () => {
  const id = 1;
  const attributes = {};
  const action = update(id, attributes);
  expect(action.meta).toMatchObject(asyncWithRetries);
});

test("keep() uses async with retries", () => {
  const id = 1;
  const interval = 1;
  const action = keep(id, interval);
  expect(action.meta).toMatchObject(asyncWithRetries);
});
