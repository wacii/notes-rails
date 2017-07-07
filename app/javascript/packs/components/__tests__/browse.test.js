import React from "react";
import { shallow } from "enzyme";
import Browse from "../browse";

test("it returns null when no notes provided", () => {
  const wrapper = shallow(<Browse />);
  expect(wrapper.equals(null)).toBeTruthy();
});

test("it renders provided notes", () => {
  const notes = [
    { id: 1, user_id: 1, author: "Sam", text: "note 1" },
    { id: 2, user_id: 2, author: "Sarah", text: "note 2" },
  ];
  const wrapper = shallow(<Browse notes={notes} />);

  const items = wrapper.find("li");
  notes.forEach((note, i) => {
    const item = items.at(i);
    expect(item.contains(note.text)).toBeTruthy();
    const link = item.find(`Link[to="/profiles/${note.user_id}/notes"]`);
    expect(link.contains(note.author)).toBeTruthy();
  });
});
