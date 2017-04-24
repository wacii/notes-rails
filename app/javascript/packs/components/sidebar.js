import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="nav hidden-small">
      <div className="card">
        <div className="card-top">
          <div className="avatar">
            <i className="ion-android-person" />
          </div>
          <Link to="#" className="user">@signo</Link>
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

      <div className="card">
        <div className="card-top">
          <h2>
            Browse
            <Link to="/all" className="float-right">
              <small>See All</small>
            </Link>
          </h2>
        </div>

        <div className="card-content">
          <div className="note">
            <p>
              Did you know about the thing that does that other thing? Well you should because it does that thing exceptionally well for being a thing.
            </p>
            <Link to="#">@timmy</Link>
          </div>

          <div className="note">
            <p>
              Dont remember to take out the thing on thingday
            </p>
            <Link to="#">@advice</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
