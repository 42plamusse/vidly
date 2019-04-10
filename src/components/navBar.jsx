import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/movies" className="nav-link">
            Movies
          </NavLink>
          <NavLink to="/customers" className="nav-link">
            Customers
          </NavLink>
          <NavLink to="/rentals" className="nav-link">
            Rentals
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// <nav className="navbar navbar-dark bg-dark">
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav">
//       <span className="navbar-brand mb-0 h1">Vidly</span>
// <NavLink to="/movies" className="nav-link">
//   Movies
// </NavLink>
// <NavLink to="/customers" className="nav-link">
//   Customers
// </NavLink>
// <NavLink to="/rentals" className="nav-link">
//   Rentals
// </NavLink>
//     </div>
//   </div>
// </nav>
