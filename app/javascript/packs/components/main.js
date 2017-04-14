import React from "react";
import { Link } from "react-router-dom";
import NewNote from "../containers/new_note";
import CurrentNote from "../containers/current_note";

function Main() {
  return (
    <div>
      <NewNote />
      <CurrentNote />
      <Link to="/all">
        All notes
      </Link>
    </div>
  );
}

export default Main;
