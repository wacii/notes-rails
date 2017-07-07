import React from "react";
import { shallow } from "enzyme";
import UserApp from "../user_app";

import Home from "../home";
import Browse from "../../containers/browse";
import Profile from "../../containers/profile";
import Settings from "../settings";

test("it routes to expected components", () => {
  const wrapper = shallow(<UserApp />);
  const router = wrapper.find("Switch");

  const components = [Home, Browse, Profile, Settings];
  components.forEach(component => {
    expect(router.find({ component })).toHaveLength(1);
  });
});
