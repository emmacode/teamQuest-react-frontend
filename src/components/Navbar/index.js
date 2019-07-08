import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <header id="header" className="index-no-box">
        <section className="container clearfix">
          <div className="logo">
            <NavLink to="/">ProjecE</NavLink>
          </div>
          <nav className="navigation">
            <ul>
              <li className="current_page_item">
                <NavLink to="/" className="a-link">
                  Home
                </NavLink>
                <ul>
                  <li>
                    <NavLink href="index.html" className="a-link">
                      Home
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="ask_question">
                <NavLink to="/ask_questions" className="a-link">
                  Ask Question
                </NavLink>
              </li>
              <li>
                <NavLink to="/questions" className="a-link">
                  Questions
                </NavLink>
              </li>
              <li>
                <NavLink href="user_profile.html" className="a-link">
                  Account
                </NavLink>
                <ul>
                  <li>
                    <NavLink href="login.html" className="a-link">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="user_profile.html" className="a-link">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="user_questions.html" className="a-link">
                      Asked Questions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="user_favorite_questions.html"
                      className="a-link"
                    >
                      Favorite Questions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="edit_profile.html" className="a-link">
                      Edit Profile
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    );
  }
}

export default Navbar;
