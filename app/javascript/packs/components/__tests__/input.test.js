import React from "react";
import { shallow } from "enzyme";
import Input from "../input";

test("it renders expected components", () => {
  const props = {
    input: {},
    label: "label",
    type: "text",
    meta: {
      touched: true,
      error: "error",
    },
  };

  const wrapper = shallow(<Input {...props} />);
  expect(wrapper.is("fieldset")).toBeTruthy();

  const label = wrapper.find("label");
  expect(label.contains("label")).toBeTruthy();

  const input = wrapper.find("input");
  expect(input.props().type).toEqual("text");
  expect(input.props().placeholder).toEqual("label");

  const error = wrapper.find("p");
  expect(error.contains("error")).toBeTruthy();
})
