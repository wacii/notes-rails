import React from "react";

import Session from "./session";
import SignUp from "./sign_up";
import SignIn from "./sign_in";

function App() {
  return (
    <Session>
      <SignUp />
      <SignIn />
    </Session>
  );
}

export default App;
