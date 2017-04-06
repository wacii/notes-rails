import React from "react";

import Session from "./session";
import Auth from "./auth";

function App() {
  return (
    <Session >
      <Auth />
    </Session>
  );
}

export default App;
