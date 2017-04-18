import React from "react";
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";
import SignOut from "../containers/sign_out";
import NewNote from "../containers/new_note";
import CurrentNote from "../containers/current_note";
import NoteList from "../containers/note_list";

// TODO: add active class to tabs

function UserApp() {
  return (
    <Router>
      <div className="container">
        <header className="flex">
          <div className="brand">
            <Link to="/">Thing</Link>
          </div>

          <div className="icons">
            <ul>
              <li>
                <Link to="#" className="ion-person hidden-large" />
              </li>

              <li>
                <Link to="#" className="ion-search hidden-large" />
              </li>

              <li>
                <Link to="#" className="ion-gear-b" />
              </li>
            </ul>
          </div>

          <div className="icons">
            <SignOut />
          </div>
        </header>

        <div className="flex">
          <div className="nav hidden-small">
            <div className="card">
              <div className="card-top">
                <div className="avatar">
                  <i className="ion-android-person" />
                </div>
                <Link to="#" className="user">@signo</Link>
              </div>

              <div className="flex">
                <Link to="#" className="tab following">
                  Following
                  <br />
                  <small>4</small>
                </Link>

                <Link to="#" className="tab user-card">
                  Followers
                  <br />
                  <small>93</small>
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-top">
                <h2>
                  Browse
                  <Link to="/all" className="float-right">
                    <small>See All</small>
                  </Link>
                </h2>
              </div>

              <div className="card-content">
                <div className="note">
                  <p>
                    Did you know about the thing that does that other thing? Well you should because it does that thing exceptionally well for being a thing.
                  </p>
                  <Link to="#">@timmy</Link>
                </div>

                <div className="note">
                  <p>
                    Don't remember to take out the thing on thingday
                  </p>
                  <Link to="#">@advice</Link>
                </div>
              </div>
            </div>
          </div>

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
