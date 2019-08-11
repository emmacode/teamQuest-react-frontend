import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
        <div className="widget widget_login">
          <h3 className="widget_title">Login</h3>
          <div className="form-style form-style-2">
            <form onSubmit={this.onSubmit}>
              <div className="form-inputs clearfix">
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
                <p className="login-text">
                  <input
                    type="text"
                    value={this.state.reg_no}
                    onChange={this.onChange}
                    name="reg_no"
                  />
                  <i className="icon-user" />
                </p>
                <p className="login-password">
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
              <p className="form-submit login-submit">
                <input
                  type="submit"
                  value="Log in"
                  className="button color small login-submit submit"
                />
              </p>
              <div className="rememberme">
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
            <ul className="login-links login-links-r">
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
        </div>
        {/* stats */}
        <div className="widget widget_stats">
          <h3 className="widget_title">Your Stats</h3>
          <div className="ul_list ul_list-icon-ok">
            <ul>
              <li>
                <i className="icon-question-sign" />
                Questions ( <span>20</span> )
              </li>
              <li>
                <i className="icon-comment" />
                Answers ( <span>50</span> )
              </li>
            </ul>
          </div>
        </div>
        {/* end stats */}
        {/* courses */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget_title">Courses</h3>
          <a href="#">MTH101</a>
          <a href="#">CSC201</a>
          <a href="#">PHY101</a>
          <a href="#">CHM109</a>
          <a href="#">PHL201</a>
          <a href="#">UCJ213</a>
        </div>
        {/* end courses */}
        {/* points */}
        <div className="widget widget_highest_points">
          <h3 className="widget_title">Highest points</h3>
          <ul>
            <li>
              <div className="author-img">
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
              <div className="author-img">
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
