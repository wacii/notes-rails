import React, { Component } from "react";
import { Link } from "react-router-dom";

// TODO: proper plurality rules for counts

class UserList extends Component {
  componentDidMount() {
    const { fetch, match: { params }} = this.props;
    fetch(params.id);
  }

  render() {
    const { users, loading, error } = this.props;

    if (loading)
      return null;

    if (users.length === 0)
      return (
        <p>No users</p>
      );

    return (
      <ul className="list-notes">
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/profiles/${user.id}/notes`} className="user">
              @{user.username}
            </Link>
            <br />
            <small>
              <ul>
                <li>{user.notes_count} notes</li>
                <li>{user.followed_count} followed</li>
                <li>{user.followers_count} followers</li>
              </ul>
            </small>
          </li>
        ))}
      </ul>
    )
  }
}

export default UserList;
