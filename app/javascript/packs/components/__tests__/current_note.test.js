import React from "react";
import { shallow } from "enzyme";
import CurrentNote from "../current_note";

test("it returns empty message when no note provided", () => {
  const handlers = { destroyNote: jest.fn(), keepNote: jest.fn() };
  const wrapper = shallow(<CurrentNote {...handlers} />);

  expect(wrapper.contains("There are no notes to review.")).toBeTruthy();
  expect(wrapper.is("div.empty")).toBeTruthy();
});

test("it renders the current note", () => {
  const note = { user_id: 1, author: "Sam", text: "Some text" };
  const handlers = { destroyNote: jest.fn(), keepNote: jest.fn() };
  const wrapper = shallow(<CurrentNote currentNote={note} {...handlers} />);

  expect(wrapper.find("div.note").contains(note.text)).toBeTruthy();
  const link = wrapper.find(`Link[to="/profiles/${note.user_id}/notes"]`);
  expect(link.contains(note.author)).toBeTruthy();
});

test("it calls provided keep and destroy methods", () => {
  const note = { user_id: 1, author: "Sam", text: "Some text" };
  const handlers = { keepNote: jest.fn(), destroyNote: jest.fn() };
  const wrapper = shallow(<CurrentNote currentNote={note} {...handlers} />);

  const buttons = wrapper.find("button");
  expect(buttons).toHaveLength(2);
  buttons.forEach(button => button.props().onClick());

  Object.keys(handlers).map(key => handlers[key]).forEach(fn => {
    expect(fn.mock.calls).toHaveLength(1);
  });
});
