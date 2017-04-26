import React from "react";
import { Link } from "react-router-dom";

function ProfileSidebar({ username }) {
  return (
    <div className="card">
      <div className="card-top">
        <div className="avatar">
          <i className="ion-android-person" />
        </div>
        <Link to="#" className="user">@{username}</Link>
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
  );
}

export default ProfileSidebar;