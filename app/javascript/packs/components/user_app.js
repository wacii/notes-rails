import React from "react";
import SignOut from "./sign_out";
import NewNote from "./new_note";
import CurrentNote from "./current_note";

function UserApp() {
  return (
    <div>
      <SignOut />
      <NewNote />
      <CurrentNote />
    </div>
  );
}

export default UserApp;
