import React from "react";

import Session from "./session";
import SignUp from "./sign_up";
import SignIn from "./sign_in";
import SignOut from "./sign_out";

function App() {
  return (
    <Session>
      <SignUp />
      <SignIn />
      <SignOut />
    </Session>
  );
}

export default App;
