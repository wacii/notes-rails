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
                <Link to="/" className="tab">Private</Link>
                <Link to="#" className="tab disabled">Shared</Link>
                <Link to="/all" className="tab">Overview</Link>
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
