import React from "react";
import { shallow } from "enzyme";
import Landing from "../landing";

test("it renders links to sign in and sign up", () => {
  const wrapper = shallow(<Landing />);
  expect(wrapper.find({ to: "/sign-in" })).toHaveLength(1);
  expect(wrapper.find({ to: "/sign-up" })).toHaveLength(1);
});
