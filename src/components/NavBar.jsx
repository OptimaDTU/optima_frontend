import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/Context';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Optima</Link>
      <GlobalContext.Consumer>
        {data => <a className="nav-link text-light" href={data.forumLink}>Forum</a>}
      </GlobalContext.Consumer>
      <a className="nav-link d-none d-sm-block d-md-block  text-light" href="/team/index.html">The Team</a>
      <Link className="nav-link ml-auto  text-light" to="/signin">Sign In</Link>
    </nav>
  )
}

export default NavBar;
