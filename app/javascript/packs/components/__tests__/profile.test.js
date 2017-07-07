import React from "react";
import { shallow } from "enzyme";
import Profile from "../profile";

import NotesList from "../../containers/note_list";
import Followed from "../../containers/followed";
import Followers from "../../containers/followers";

const userDefault = {
  id: 1,
  username: "Sam",
  notes_count: 0,
  followers_count: 0,
  followed_count: 0,
  can_follow: true,
};

const defaultProps = {
  getProfile: jest.fn(),
  match: { params: { id: 2 } },
};

test("it renders follow button if allowed to follow", () => {
  let user = Object.assign({}, userDefault);
  let wrapper = shallow(<Profile user={user} {...defaultProps} />);
  expect(wrapper.find("button").contains("Follow")).toBeTruthy();

  user = Object.assign({}, userDefault, { can_follow: false });
  wrapper = shallow(<Profile user={user} {...defaultProps} />);
  expect(wrapper.not("button")).toBeTruthy();
});

test("it renders expected links", () => {
  const user = Object.assign({}, userDefault);
  const wrapper = shallow(<Profile user={user} {...defaultProps} />);

  expect(wrapper.find({ to: "/profiles/1/notes" })).toHaveLength(1);
  expect(wrapper.find({ to: "/profiles/1/followed" })).toHaveLength(1);
  expect(wrapper.find({ to: "/profiles/1/followers" })).toHaveLength(1);
});

test("it routes to expected components", () => {
  const user = Object.assign({}, userDefault);
  const wrapper = shallow(<Profile user={user} {...defaultProps} />);

  const router = wrapper.find("Switch");
  [NotesList, Followed, Followers].forEach(component => {
    expect(router.find({ component })).toHaveLength(1);
  });
  expect(router.find({ to: "/profiles/2/notes" })).toHaveLength(1);
});
