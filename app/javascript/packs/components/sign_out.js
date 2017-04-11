import React, { Component, PropTypes } from "react";
import injectAuth from "../stores/inject_auth";

function SignOut({ signOut }) {
  return (
    <button onClick={signOut}>
      Sign Out
    </button>
  );
}

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default injectAuth(SignOut);
