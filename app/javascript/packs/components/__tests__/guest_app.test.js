import React from "react";
import { shallow } from "enzyme";
import GuestApp from "../guest_app";

test("it renders router", () => {
  const wrapper = shallow(<GuestApp />);
  expect(wrapper.is("BrowserRouter")).toBeTruthy();
});
