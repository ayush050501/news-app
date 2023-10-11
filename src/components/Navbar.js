import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/health">Health</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technology">Technology</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
