import React from "react";
import PropTypes from "prop-types";
import UserApp from "./user_app";
import GuestApp from "./guest_app";

function App({ signedIn }) {
  return (signedIn ? <UserApp /> : <GuestApp />);
}

App.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

export default App;
