import React, { PropTypes } from "react";
import SignIn from "./sign_in";
import SignUp from "./sign_up";
import SignOut from "./sign_out";

function Auth(_props, { signedIn }) {
  if (signedIn)
    return <SignOut />;

  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
}

Auth.contextTypes = {
  signedIn: PropTypes.bool,
};

export default Auth;
