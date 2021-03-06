import React from "react";
import PropTypes from "prop-types";

function SignOut({ signOut }) {
  return (
    <a onClick={signOut}>
      Sign Out
    </a>
  );
}

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default SignOut;
