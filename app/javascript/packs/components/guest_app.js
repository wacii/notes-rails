import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from "./landing";
import SignIn from "../containers/sign_in";
import SignUp from "../containers/sign_up";

function GuestApp() {
  return (
    <Router>
      <div className="container landing">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default GuestApp;
