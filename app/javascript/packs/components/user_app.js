import React from "react";
import SignOut from "./sign_out";
import NewNote from "./new_note";

function UserApp() {
  return (
    <div>
      <SignOut />
      <NewNote addNote={text => console.log(text)} />
    </div>
  );
}

export default UserApp;
