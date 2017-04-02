import React from "react";
import { render } from "react-dom";
import SignUp from "./components/sign_up";

function App() {
  return <SignUp />;
}

document.addEventListener("DOMContentLoaded", () => {
  render(
    <App />,
    document.getElementById("app")
  );
});
