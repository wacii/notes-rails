import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import NotesList from "../containers/note_list";
import Followed from "../containers/followed";
import Followers from "../containers/followers";

// TODO: extract logic into container/multiple components
//  including moving merging action with param
// TODO: there are keys missing from proptypes, like params

class Profile extends Component {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
  }

  componentWillMount() {
    const { getProfile, match: { params } } = this.props;
    getProfile(params.id);
  }

  componentWillReceiveProps(nextProps) {
    const { getProfile, match: { params: { id: currId } } } = this.props;
    const { match: { params: { id: nextId } } } = nextProps;
    if (nextId !== currId)
      getProfile(nextId);
  }

  follow(event) {
    const { createFollow, match: { params: { id } } } = this.props;
    createFollow(id);
    event.preventDefault();
  }

  render() {
    const { user, loading, error } = this.props;
    const { match: { params: { id } } } = this.props;
    if (!user) {
      return null;
    }

    return (
      <section>
        <div className="username">
          <a className="you">@{user.username}</a>

          {user.can_follow &&
            <button className="button-primary float-right" onClick={this.follow}>
              Follow
            </button>
          }
        </div>

        <div className="tabs">
          <NavLink to={`/profiles/${user.id}/notes`} className="tab">
            <p>Notes</p>
            <small>{user.notes_count}</small>
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

Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    notes_count: PropTypes.number.isRequired,
    followed_count: PropTypes.number.isRequired,
    followers_count: PropTypes.number.isRequired
  }).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default Profile;
