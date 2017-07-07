import React from "react";
import { shallow } from "enzyme";
import Header from "../header";

import SignOut from "../../containers/sign_out";

test("it renders the expected links", () => {
  const userId = 1;
  const wrapper = shallow(<Header userId={userId} />);

  // `to` assumed to be prop for NavLink and Link only
  expect(wrapper.find({ to: "/" })).toHaveLength(2);
  expect(wrapper.find({ to: "/browse" })).toHaveLength(1);
  expect(wrapper.find({ to: `/profiles/${userId}` })).toHaveLength(1);
  expect(wrapper.find({ to: "/settings" })).toHaveLength(1);
  expect(wrapper.find(SignOut)).toHaveLength(1);
});
