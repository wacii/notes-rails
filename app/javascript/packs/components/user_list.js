import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// TODO: proper plurality rules for counts
// TODO: extract fetch into container

class UserList extends Component {
  componentWillMount() {
    const { fetch, match: { params: { id } }} = this.props;
    fetch(id);
  }

  componentWillReceiveProps(nextProps) {
    const { fetch, match: { params: { id: currId } } } = this.props;
    const { match: { params: { id: nextId } } } = nextProps;
    if (currId !== nextId)
      fetch(nextId);
  }

  render() {
    const { users, loading, error } = this.props;

    if (!users)
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

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      notes_count: PropTypes.number.isRequired,
      followed_count: PropTypes.number.isRequired,
      followers_count: PropTypes.number.isRequired,
    })
  ),
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default UserList;
