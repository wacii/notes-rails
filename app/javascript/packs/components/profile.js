import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import ActiveLink from "./active_link";
import NotesList from "../containers/note_list";
import Followed from "../containers/followed";
import Followers from "../containers/followers";

class Profile extends Component {
  componentDidMount() {
    const { getProfile, match: { params } } = this.props;
    getProfile(params.id);
  }

  render() {
    const { user, loading, error } = this.props;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="card">
        <div className="card-top">
          <h2>
            <div className="avatar">
              <i className="i ion-android-person" />
            </div>

            @{user.username}

            <button className="float-right button-primary">
              Follow
            </button>
          </h2>
        </div>

        <div className="flex">
          <ActiveLink to={`/profile/${user.id}/notes`} className="tab">
            Notes
            <br />
            <small>403</small>
          </ActiveLink>

          <ActiveLink to={`/profile/${user.id}/followed`} className="tab">
            Followed
            <br />
            <small>{user.followed_count}</small>
          </ActiveLink>

          <ActiveLink to={`/profile/${user.id}/followers`}  className="tab">
            Followers
            <br />
            <small>{user.followers_count}</small>
          </ActiveLink>
        </div>

        <Switch>
          <Route path="/profile/:id/notes" component={NotesList} />
          <Route path="/profile/:id/followed" component={Followed} />
          <Route path="/profile/:id/followers" component={Followers} />
        </Switch>
      </div>
    );
  }
}

export default Profile;
