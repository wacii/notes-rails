import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SignOut from "./sign_out";
import Main from "./main";
import NoteList from "./note_list";

function UserApp() {
  return (
    <Router>
      <div>
        <SignOut />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/all" component={NoteList} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default UserApp;
