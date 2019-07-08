import React, { Component } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <header id="header" className="index">
        <nav className="navigation">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              Project E
            </NavLink>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#adosResponsive"
              aria-controls="adosResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="adosResponsive">
              <ul className="navbar-nav smooth-scroll ml-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    Ask Question
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">Questions</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/team" className="nav-link">
                    Account
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
