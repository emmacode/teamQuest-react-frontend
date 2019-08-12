import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./index.css";
import { login } from "../../store/actions/postActions";

class Aside extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      institution: "",
      reg_no: "",
      password: "",
      remb_me: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      institution: this.state.institution,
      reg_no: this.state.reg_no,
      password: this.state.password,
      remb_me: this.state.remb_me
    };

    this.props.login(post);
  }

  render() {
    return (
      <React.Fragment>
        <div className="Aside__widget Aside__widget-login">
          <h3 className="Aside__widget-title">Login</h3>
          <div className="Aside__form-style Aside__form-style-2">
            <form onSubmit={this.onSubmit}>
              <div className="Aside__form-inputs clearfix">
                <p>
                  <select
                    value={this.state.institution}
                    onChange={this.onChange}
                    name="institution"
                  >
                    <option value="">Choose your Institution</option>
                    <option value="Obafemi Awolowo University">
                      Obafemi Awolowo University
                    </option>
                    <option value="University Of Ibadan">
                      University Of Ibadan
                    </option>
                    <option value="University Of Lagos">
                      University Of Lagos
                    </option>
                  </select>
                </p>
                <p className="Aside__login-text">
                  <input
                    type="text"
                    value={this.state.reg_no}
                    onChange={this.onChange}
                    name="reg_no"
                  />
                  <i className="icon-user" />
                </p>
                <p className="Aside__login-password">
                  <input
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.onChange}
                  />
                  <i className="icon-lock" />
                  <a href="#">Forget</a>
                </p>
              </div>
              <p className="Aside__form-submit Aside__login-submit">
                <input
                  type="submit"
                  value="Log in"
                  className="btn btn-success Aside__button Aside__color small Aside__login-submit submit"
                />
              </p>
              <div className="Aside__rememberme">
                <label>
                  <input
                    type="checkbox"
                    value={this.state.remb_me}
                    name="remb_me"
                  />{" "}
                  Remember Me
                </label>
              </div>
            </form>
            <div className="clearfix" />
          </div>
        </div>

        {/* courses */}
        <div className="Aside__widget Aside__widget-tag-cloud">
          <h3 className="Aside__widget-title">Courses</h3>
          <a href="#">MTH101</a>
          <a href="#">CSC201</a>
          <a href="#">PHY101</a>
          <a href="#">CHM109</a>
          <a href="#">PHL201</a>
          <a href="#">UCJ213</a>
          <div className="Aside__register">
            <a className="btn btn-success small signup">View More</a>
          </div>
        </div>
        {/* end courses */}

        {/* points */}
        <div className="Aside__widget Aside__widget-highest-points">
          <h3 className="Aside__widget-title">Leaderboard</h3>
          <ul>
            <li>
              <div className="Aside__author-img">
                <a href="#">
                  <img
                    width="60"
                    height="60"
                    src="../ask-me/images/demo/admin.jpg"
                    alt=""
                  />
                </a>
              </div>
              <h6>
                <a href="#">admin</a>
              </h6>
              <span className="comment">12 Points</span>
            </li>
            <li>
              <div className="Aside__author-img">
                <a href="#">
                  <img
                    width="60"
                    height="60"
                    src="../ask-me/images/demo/avatar.png"
                    alt=""
                  />
                </a>
              </div>
              <h6>
                <a href="#">vbegy</a>
              </h6>
              <span className="comment">10 Points</span>
            </li>
          </ul>
        </div>
        {/* end of points */}
      </React.Fragment>
    );
  }
}

Aside.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(Aside);
