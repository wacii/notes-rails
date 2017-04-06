import React from "react";
import { render } from "react-dom";
import App from "./components/app"

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("auth");
  const email = el.getAttribute("data-email");
  const signedIn = !!email;

  render(
    <App signedIn={signedIn} />,
    document.getElementById("app")
  );
});
