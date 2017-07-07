import React from "react";
import { shallow } from "enzyme";
import NoteList from "../note_list";

test("it return null when no notes provided", () => {
  const wrapper = shallow(<NoteList fetch={jest.fn()} />);
  expect(wrapper.equals(null)).toBeTruthy();
});

test("it renders provided notes", () => {
  const notes = [
    { id: 1, text: "note 1", review_after: new Date },
    { id: 2, text: "note 2", review_after: new Date }
  ];
  const wrapper = shallow(<NoteList fetch={jest.fn()} notes={notes} />);
  const noteWrappers = wrapper.find('li');

  notes.forEach((note, i) => {
    expect(noteWrappers.at(i).contains(note.text)).toBeTruthy();
  });
});
