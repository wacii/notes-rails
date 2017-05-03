import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Account from "../containers/account";
import Password from "../containers/password";

function Settings() {
  return (
    <section>
      <div className="tabs">
        <NavLink exact to="/settings" className="tab">Account</NavLink>
        <NavLink to="/settings/password" className="tab">Password</NavLink>
      </div>

      <Switch>
        <Route path="/settings/password" component={Password} />
        <Route path="/settings" component={Account} />
      </Switch>
    </section>
  );
}

export default Settings;
