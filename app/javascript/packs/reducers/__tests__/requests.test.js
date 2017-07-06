import reducer from "../requests";

test("demonstrate one of the generated reducers works as expected", () => {
  const data = { someMeaningfulData: [] };
  const error = { message: "Error!" };

  const prefix = "CREATE_FOLLOW";
  const REQUEST = { type: `${prefix}_REQUEST` };
  const SUCCESS = { type: `${prefix}_SUCCESS`, payload: data };
  const FAILURE = { type: `${prefix}_FAILURE`, payload: error };

  expect(reducer({}, {}))
    .toHaveProperty("createFollow", { loading: false, error: null });
  expect(reducer({}, REQUEST))
    .toHaveProperty("createFollow", { loading: true, error: null });
  expect(reducer({}, SUCCESS))
    .toHaveProperty("createFollow", { loading: false, error: null });
  expect(reducer({}, FAILURE))
    .toHaveProperty("createFollow", { loading: false, error });
});
