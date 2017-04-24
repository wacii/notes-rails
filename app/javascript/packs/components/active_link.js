import React from "react";
import { Link, Route } from "react-router-dom";

function ActiveLink(props) {
  return (
    <Route exact path={props.to} children={({ match }) => (
      <Link {...props} className={`${props.className} ${match && "active"}`} />
    )} />
  );
}

export default ActiveLink;
