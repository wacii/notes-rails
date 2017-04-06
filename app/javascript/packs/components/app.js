import React from "react";

import Session from "./session";
import Auth from "./auth";

function App({ signedIn }) {
  return (
    <Session signedIn={signedIn}>
      <Auth />
    </Session>
  );
}

export default App;
