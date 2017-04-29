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
        <Link to={`/profiles/${id}/notes`} className="user">@{username}</Link>
      </div>

      <div className="flex">
        <Link to={`/profiles/${id}/followed`} className="tab following">
          Followed
          <br />
          <small>{followed}</small>
        </Link>

        <Link to={`/profiles/${id}/followers`} className="tab user-card">
          Followers
          <br />
          <small>{followers}</small>
        </Link>
      </div>
    </div>
  );
}

export default ProfileSidebar;
