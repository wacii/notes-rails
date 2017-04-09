import React from "react";
import injectAuth from "../stores/inject_auth";
import UserApp from "./user_app";
import GuestApp from "./guest_app";

function App({ signedIn }) {
  return (signedIn ? <UserApp /> : <GuestApp />);
}

export default injectAuth(App);
