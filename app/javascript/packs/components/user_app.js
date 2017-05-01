import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "../containers/header";
import Home from "./home";
import Browse from "../containers/browse";
import Profile from "../containers/profile";

function UserApp() {
  return (
    <Router>
      <div>
        <Header />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/browse" component={Browse} />
            <Route path="/profiles/:id" component={Profile} />

            <Redirect from="/sign-in" to="/" />
            <Redirect from="/sign-up" to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default UserApp;
