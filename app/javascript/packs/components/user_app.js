import React from "react";
import SignOut from "./sign_out";
import NewNote from "./new_note";
import CurrentNote from "./current_note";
import NoteList from "./note_list";

function UserApp() {
  return (
    <div>
      <SignOut />
      <NewNote />
      <CurrentNote />
      <NoteList />
    </div>
  );
}

export default UserApp;
