import React from "react";
import UserApp from "./user_app";
import GuestApp from "./guest_app";

function App({ signedIn }) {
  return (signedIn ? <UserApp /> : <GuestApp />);
}

export default App;
