import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SignOut from "../containers/sign_out";
import NewNote from "../containers/new_note";
import CurrentNote from "../containers/current_note";
import NoteList from "../containers/note_list";
import Header from "./header";
import Sidebar from "./sidebar";
import ActiveLink from "./active_link";

// TODO: add active class to tabs

function UserApp() {
  return (
    <Router>
      <div className="container">
        <Header />

        <div className="flex">
          <Sidebar />

          <div className="content">
            <div className="card">
              <div className="card-top">
                <NewNote />
              </div>

              <div className="flex">
                <ActiveLink to="/" className="tab">Private</ActiveLink>
                <Link to="#" className="tab disabled">Shared</Link>
                <ActiveLink to="/all" className="tab">Overview</ActiveLink>
              </div>

              <div className="card-content">
                <Switch>
                  <Route exact path="/" component={CurrentNote} />
                  <Route path="/all" component={NoteList} />
                  <Redirect to="/" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default UserApp;
