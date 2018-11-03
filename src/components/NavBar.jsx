import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Context";

import optima_logo from "../assets/img/optima_logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src={optima_logo} width="80" height="30" className="d-inline-block align-top" alt="" />
      </Link>
      <GlobalContext.Consumer>
        {data => (
          <a className="nav-link text-light" href={data.forumLink}>
            Forum
          </a>
        )}
      </GlobalContext.Consumer>
      <Link className="nav-link text-light" to="/team">
        The Team
      </Link>
    </nav>
  );
};

export default NavBar;
