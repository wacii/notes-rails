import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../containers/sign_out";

function Header() {
  return (
    <header className="flex">
      <div className="brand">
        <Link to="/">Thing</Link>
      </div>

      <div className="icons">
        <ul>
          <li>
            <Link to="#" className="ion-person hidden-large" />
          </li>

          <li>
            <Link to="#" className="ion-search hidden-large" />
          </li>

          <li>
            <Link to="#" className="ion-gear-b" />
          </li>
        </ul>
      </div>

      <div className="icons">
        <SignOut />
      </div>
    </header>
  );
}

export default Header;
