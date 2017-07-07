import React from "react";
import { shallow } from "enzyme";
import Home from "../home";

import NewNote from "../../containers/new_note";
import CurrentNote from "../../containers/current_note";

test("it renders expected components", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find(NewNote)).toHaveLength(1);
  expect(wrapper.find(CurrentNote)).toHaveLength(1);
});
