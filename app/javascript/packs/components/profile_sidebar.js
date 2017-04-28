import React from "react";
import { Link } from "react-router-dom";

// TODO: not synced with new follows

function ProfileSidebar({ id, username, followers, followed }) {
  return (
    <div className="card">
      <div className="card-top">
        <div className="avatar">
          <i className="ion-android-person" />
        </div>
        <Link to={`/profile/${id}/notes`} className="user">@{username}</Link>
      </div>

      <div className="flex">
        <Link to={`/profile/${id}/followed`} className="tab following">
          Followed
          <br />
          <small>{followed}</small>
        </Link>

        <Link to={`/profile/${id}/followers`} className="tab user-card">
          Followers
          <br />
          <small>{followers}</small>
        </Link>
      </div>
    </div>
  );
}

export default ProfileSidebar;
