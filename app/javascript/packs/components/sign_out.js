import React, { PropTypes } from "react";

function SignOut({ signOut }) {
  return (
    <button className="button-secondary" onClick={signOut}>
      Sign Out
    </button>
  );
}

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default SignOut;
