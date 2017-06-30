import { create } from "../follows";

const asyncWithRetries = {
  offline: {
    effect: expect.any(Object),
    commit: expect.any(Object),
    rollback: expect.any(Object)
  }
};

test("create() uses async with retries", () => {
  const id = 1;
  const action = create(id);
  expect(action.meta).toMatchObject(asyncWithRetries);
});
