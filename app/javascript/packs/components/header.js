import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./dropdown";
import SignOut from "../containers/sign_out";

function Header({ userId }) {
  return (
    <header>
      <div className="container">
        <div className="header-nav">
          <Link to="/" className="header-brand hide-mobile">[~]</Link>

          <NavLink exact to="/" className="header-item" />
          <NavLink to="/browse" className="header-item" />
          <NavLink to={`/profiles/${userId}`} className="header-item" />

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

Header.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Header;
