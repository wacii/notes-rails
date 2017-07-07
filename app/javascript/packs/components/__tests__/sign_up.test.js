import React from "react";
import { shallow } from "enzyme";
import SignUp from "../sign_up";

import { email, required, min, max, confirm } from "../../utils/validations";

test("it renders expected fields", () => {
  const props = { handleSubmit: jest.fn(), submitting: false };
  const wrapper = shallow(<SignUp {...props} />);

  let field = wrapper.find("Field[name=\"email\"]");
  expect(field.props().validate).toEqual(email);

  field = wrapper.find("Field[name=\"password\"]");
  const expectedFns = [required, expect.any(Function), expect.any(Function)];
  expect(field.props().validate).toEqual(expectedFns);

  field = wrapper.find("Field[name=\"password_confirmation\"]");
  expect(field.props().validate).toEqual(expect.any(Function));
});

test("it submits with provided handleSubmit()", () => {
  const props = { handleSubmit: jest.fn(), submitting: false };
  const wrapper = shallow(<SignUp {...props} />);

  const form = wrapper.find("form");
  expect(form.props().onSubmit).toEqual(props.handleSubmit);
});

test("it renders a link to sign in", () => {
  const props = { handleSubmit: jest.fn(), submitting: false };
  const wrapper = shallow(<SignUp {...props} />);

  expect(wrapper.find("Link[to=\"/sign-in\"]")).toHaveLength(1);
});
