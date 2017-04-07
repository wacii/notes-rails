import React from "react";

import Session from "./session";
import Auth from "./auth";
import NewNote from "./new_note";

function App({ signedIn }) {
  return (
    <Session signedIn={signedIn}>
      <Auth />
      <NewNote addNote={text => console.log(text)}/>
    </Session>
  );
}

export default App;
