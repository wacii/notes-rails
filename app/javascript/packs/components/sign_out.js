import React, { PropTypes } from "react";
import signOut from "../api/sign_out";

function SignOut(props, { toggleAuthenticated }) {
  return (
    <button onClick={() => toggleAuthenticated(false)}>
      Sign Out
    </button>
  );
}

SignOut.contextTypes = {
  toggleAuthenticated: PropTypes.func,
}

export default SignOut;
