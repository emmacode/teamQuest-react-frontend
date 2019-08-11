import React from "react";
import { login } from "../../store/actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Login extends React.PureComponent {
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
        <section className="container main-content">
          <div className="login">
            <div className="row">
              <div className="col-md-7">
                <div className="page-content">
                  <h2>Login</h2>
                  <div className="form-style form-style-3">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-inputs clearfix">
                        <p>
                          <select value={this.state.institution}>
                            <option value="">Choose your Institution</option>
                            <option value=" Obafemi Awolowo University">
                              Obafemi Awolowo University
                            </option>
                            <option value="University of Ibadan">
                              University of Ibadan
                            </option>
                            <option value="University of Lagos">
                              University of Lagos
                            </option>
                          </select>
                        </p>
                        {/* login text */}
                        <p className="login-text">
                          <input
                            type="text"
                            name="reg_no"
                            value={this.state.reg_no}
                            onChange={this.onChange}
                          />
                          <i className="icon-user" />
                        </p>
                        {/* end login text */}
                        {/* login password */}
                        <p className="login-password">
                          <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                          <i className="icon-lock" />
                          <a href="#">Forget</a>
                        </p>
                        {/* end login password */}
                      </div>
                      {/* form submit */}
                      <p className="form-submit login-submit">
                        <input
                          type="submit"
                          value="Log in"
                          className="button color small login-submit submit"
                        />
                      </p>
                      {/* end form submit */}
                      {/* rememberme */}
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
                      {/* end rememberme */}
                    </form>
                  </div>
                </div>
                {/* end page content */}
              </div>
              {/* end col-md-7 */}
            </div>
            {/* end row */}
          </div>
          {/* end login */}
        </section>
        {/* end container */}
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};
export default connect(
  null,
  { login }
)(Login);
