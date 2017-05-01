import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./active_link";
import Dropdown from "./dropdown";
import SignOut from "../containers/sign_out";

// FIXME: setup dropdown

function Header({ userId }) {
  return (
    <header>
      <div className="container">
        <div className="header-nav">
          <Link to="/" className="header-brand hide-mobile">[~]</Link>

          <ActiveLink to="/" className="header-item" />
          <ActiveLink to="/browse" className="header-item" />
          <ActiveLink to={`/profiles/${userId}/notes`} className="header-item" />

          <div className="header-nav-space hide-mobile" />

          <Dropdown className="header-cog">
            <Link to="/settings">Settings</Link>
            <SignOut />
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

export default Header;
