import React from "react";
import { shallow } from "enzyme";
import Settings from "../settings";

import Account from "../../containers/account";
import Password from "../../containers/password";

test("it renders expected links", () => {
  const wrapper = shallow(<Settings />);
  expect(wrapper.find({ to: "/settings" })).toHaveLength(1);
  expect(wrapper.find({ to: "/settings/password" })).toHaveLength(1);
});

test("it routes to expected components", () => {
  const wrapper = shallow(<Settings />);
  const router = wrapper.find("Switch");
  expect(router.find({ component: Account })).toHaveLength(1);
  expect(router.find({ component: Password })).toHaveLength(1);
});
