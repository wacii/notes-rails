import React from "react";
import { render } from "react-dom";
import Session from "./components/session";
import UserApp from "./components/user_app";
import GuestApp from "./components/guest_app";

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("auth");
  const email = el.getAttribute("data-email");
  const signedIn = !!email;

  render(
    <Session signedIn={signedIn}>
      {signedIn => signedIn ? <UserApp /> : <GuestApp />}
    </Session>,
    document.getElementById("app")
  );
});
