import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Context";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Optima
      </Link>
      <GlobalContext.Consumer>
        {data => (
          <a className="nav-link text-light" href={data.forumLink}>
            Forum
          </a>
        )}
      </GlobalContext.Consumer>
      <a className="nav-link text-light" href="/team">
        The Team
      </a>
    </nav>
  );
};

export default NavBar;
