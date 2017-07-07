import React from "react";
import { shallow } from "enzyme";
import SignIn from "../sign_in";

import { email, required, min, max } from "../../utils/validations";

it("it renders expected fields", () => {
  const props = { handleSubmit: jest.fn(), submitting: false };
  const wrapper = shallow(<SignIn {...props} />);

  let field = wrapper.find("Field[name=\"email\"]");
  expect(field.props().validate).toEqual(email);

  field = wrapper.find("Field[name=\"password\"]");
  const expectedFns = [required, expect.any(Function), expect.any(Function)];
  expect(field.props().validate).toEqual(expectedFns);
});

it("it submits with provided handleSubmit()", () => {
  const props = { handleSubmit: jest.fn(), submitting: false };
  const wrapper = shallow(<SignIn {...props} />);

  const form = wrapper.find("form");
  expect(form.props().onSubmit).toEqual(props.handleSubmit);
});

it("it renders a link to sign up", () => {
  const props = { handleSubmit: jest.fn(), submitting: false };
  const wrapper = shallow(<SignIn {...props} />);

  expect(wrapper.find("Link[to=\"/sign-up\"]")).toHaveLength(1);
});
