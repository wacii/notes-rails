import React from "react";
import { shallow } from "enzyme";
import SignOut from "../sign_out";

test("it calls provided signOut()", () => {
  const signOut = jest.fn();
  const wrapper = shallow(<SignOut signOut={signOut} />);

  const link = wrapper.find("a");
  expect(link.props().onClick).toEqual(signOut);
});
