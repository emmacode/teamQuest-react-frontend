import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.PureComponent {
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
                <NavLink to="/user_profile" className="a-link">
                  Account
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/login" className="a-link">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/user_profile" className="a-link">
                      Profile
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
