import React, { Component } from "react";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import NotesList from "../containers/note_list";
import Followed from "../containers/followed";
import Followers from "../containers/followers";

// FIXME: hook up notes count

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
    const { match: { params: { id } } } = this.props;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <section>
        <div className="username">
          <a className="you">@{user.username}</a>

          <button className="button-primary float-right" onClick={this.follow}>
            Follow
          </button>
        </div>

        <div className="tabs">
          <NavLink to={`/profiles/${user.id}/notes`} className="tab">
            <p>Notes</p>
            <small>403</small>
          </NavLink>

          <NavLink to={`/profiles/${user.id}/followed`} className="tab">
            <p>Followed</p>
            <small>{user.followed_count}</small>
          </NavLink>

          <NavLink to={`/profiles/${user.id}/followers`}  className="tab">
            <p>Followers</p>
            <small>{user.followers_count}</small>
          </NavLink>
        </div>

        <Switch>
          <Route path="/profiles/:id/notes" component={NotesList} />
          <Route path="/profiles/:id/followed" component={Followed} />
          <Route path="/profiles/:id/followers" component={Followers} />
          <Redirect to={`/profiles/${id}/notes`} />
        </Switch>
      </section>
    );
  }
}

export default Profile;
