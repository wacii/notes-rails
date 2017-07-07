import React from "react";
import { shallow } from "enzyme";
import Dropdown from "../dropdown";

// TODO: mock document properly with jsdom
beforeEach(() => global.document = ({ addEventListener: jest.fn() }));
afterEach(() => global.document = undefined );

test("it opens when clicked", () => {
  const wrapper = shallow(<Dropdown />);
  expect(wrapper.state('open')).toBeFalsy();

  wrapper.props().onClick();
  expect(wrapper.state('open')).toBeTruthy();
});
