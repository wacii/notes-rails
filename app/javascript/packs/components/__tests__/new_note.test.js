import React from "react";
import { shallow } from "enzyme";
import NewNote from "../new_note";

import { reduxForm } from "redux-form";

test("it renders field with note text field", () => {
  const handlers = { handleSubmit: jest.fn(), post: jest.fn(), share: jest.fn() };
  const wrapper = shallow(<NewNote {...handlers} />);

  expect(wrapper.is("form")).toBeTruthy();
  expect(wrapper.props().onSubmit).toEqual(handlers.handleSubmit);

  const input = wrapper.find("Field");
  expect(input.props().name).toEqual("text")
});

test("it calls post or share when buttons pressed", () => {
  const handlers = { post: jest.fn(), share: jest.fn() };
  const wrapper = shallow(<NewNote handleSubmit={jest.fn()} {...handlers} />);

  const buttons = wrapper.find("button");
  Object.keys(handlers).map(key => handlers[key]).forEach((fn, i) => {
    expect(buttons.at(i).props().onClick).toEqual(fn);
  });
});
