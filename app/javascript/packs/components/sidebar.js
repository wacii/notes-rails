import React from "react";
import { Link } from "react-router-dom";
import ProfileSidebar from "../containers/profile_sidebar";

function Sidebar() {
  return (
    <div className="nav hidden-small">
      <ProfileSidebar />

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
