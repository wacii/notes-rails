import { get, followed, followers } from "../users";

const asyncWithRetries = {
  offline: {
    effect: expect.any(Object),
    commit: expect.any(Object),
    rollback: expect.any(Object)
  }
};

test("get() uses async with retries", () => {
  const id = 1;
  const action = get(id);
  expect(action.meta).toMatchObject(asyncWithRetries);
});

test("followed() uses async with retries", () => {
  const id = 1;
  const action = followed(id);
  expect(action.meta).toMatchObject(asyncWithRetries);
});

test("followers() uses async with retries", () => {
  const id = 1;
  const action = followers(id);
  expect(action.meta).toMatchObject(asyncWithRetries);
});
