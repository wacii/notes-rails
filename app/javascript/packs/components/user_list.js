import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserList extends Component {
  componentDidMount() {
    const { fetch, match: { params }} = this.props;
    fetch(params.id);
  }

  render() {
    const { users, loading, error } = this.props;

    if (loading)
      return <p>Loading...</p>;

    if (users.length === 0)
      return (
        <p>No users</p>
      );

    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/profile/${user.id}/notes`}>
              @{user.username}
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default UserList;
