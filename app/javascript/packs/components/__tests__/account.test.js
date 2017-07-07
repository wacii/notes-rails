import React from "react";
import { shallow } from "enzyme";
import Account from "../account";
import { email, required, min, max } from "../../utils/validations";

test("it renders expected inputs", () => {
  const wrapper = shallow(<Account handleSubmit={jest.fn()} />);

  expect(wrapper.find("Field")).toHaveLength(3);
  const findField = (name) => wrapper.find(`Field[name="${name}"]`);

  expect(findField("username").props()).toHaveProperty("validate", required);
  expect(findField("email").props()).toHaveProperty("validate", email);
  // NOTE: min(25) does not return same function, so must test for generic
  //  consider memoizing results so you can test for exact validators
  const fns = [required, expect.any(Function), expect.any(Function)];
  expect(findField("current_password").props()).toHaveProperty("validate", fns);
});

test("it calls onSubmit()", () => {
  const submit = jest.fn();
  const wrapper = shallow(<Account handleSubmit={submit} />);

  const form = wrapper.find("form")
  expect(form.props()).toHaveProperty("onSubmit", submit);
});
