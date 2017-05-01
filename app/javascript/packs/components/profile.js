import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import ActiveLink from "./active_link";
import NotesList from "../containers/note_list";
import Followed from "../containers/followed";
import Followers from "../containers/followers";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
  }

  componentDidMount() {
    const { getProfile, match: { params } } = this.props;
    getProfile(params.id);
  }

  follow(event) {
    const { createFollow, match: { params: { id } } } = this.props;
    createFollow(id);
    event.preventDefault();
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

            <button className="float-right button-primary" onClick={this.follow}>
              Follow
            </button>
          </h2>
        </div>

        <div className="flex">
          <ActiveLink to={`/profiles/${user.id}/notes`} className="tab">
            Notes
            <br />
            <small>403</small>
          </ActiveLink>

          <ActiveLink to={`/profiles/${user.id}/followed`} className="tab">
            Followed
            <br />
            <small>{user.followed_count}</small>
          </ActiveLink>

          <ActiveLink to={`/profiles/${user.id}/followers`}  className="tab">
            Followers
            <br />
            <small>{user.followers_count}</small>
          </ActiveLink>
        </div>

        <Switch>
          <Route path="/profiles/:id/notes" component={NotesList} />
          <Route path="/profiles/:id/followed" component={Followed} />
          <Route path="/profiles/:id/followers" component={Followers} />
        </Switch>
      </div>
    );
  }
}

export default Profile;
