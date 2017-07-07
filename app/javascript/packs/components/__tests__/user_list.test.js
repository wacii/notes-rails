import React from "react";
import { shallow } from "enzyme";
import UserList from "../user_list";

const props = {
  match: { params: { id: 1 } },
  fetch: jest.fn(),
};

test("it renders null when no users provided", () => {
  const wrapper = shallow(<UserList {...props} />);
  expect(wrapper.equals(null)).toBeTruthy();
});

test("it renders empty message when users empty", () => {
  const wrapper = shallow(<UserList users={[]} {...props} />);
  expect(wrapper.contains("No users")).toBeTruthy();
});

test("it renders provided users", () => {
  const userDefaults = { notes_count: 0, followers_count: 0, followed_count: 0 };
  const users = [
    Object.assign({}, userDefaults, { id: 1, username: "Sam" }),
    Object.assign({}, userDefaults, { id: 2, username: "Sarah" })
  ];
  const wrapper = shallow(<UserList users={users} {...props} />);
  const items = wrapper.children();

  users.forEach((user, i) => {
    const item = items.at(i);
    const link = item.find(`Link[to="/profiles/${user.id}/notes"]`);
    expect(link.contains(user.username)).toBeTruthy();
  });
});
