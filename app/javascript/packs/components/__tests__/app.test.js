import React from "react";
import { shallow } from "enzyme";
import App from "../app";

test("it renders expected subapp", () => {
  let wrapper = shallow(<App signedIn={false} />);
  expect(wrapper.is("GuestApp")).toBeTruthy();

  wrapper = shallow(<App signedIn={true} />);
  expect(wrapper.is("UserApp")).toBeTruthy();
});
