import React from "react";

import Aside from "../Aside";

class EditProfile extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <section className="container main-content">
          <div className="row">
            <div className="col-md-9">
              <div className="page-content">
                <div className="boxedtitle page-title">
                  <h2>Edit Profile</h2>
                </div>
                <div className="form-style form-style-4">
                  <form>
                    <div className="form-inputs clearfix">
                      <p>
                        <label>First Name</label>
                        <input type="text" value="Tosin" readonly />
                      </p>
                      <p>
                        <label>Last Name</label>
                        <input type="text" value="Ogunfowote" readonly />
                      </p>
                      <p>
                        <label class="required">
                          Matric No<span>*</span>
                        </label>
                        <input type="email" value="CSC/2017/095" readonly />
                      </p>
                      <p>
                        <label class="required">
                          Password<span>*</span>
                        </label>
                        <input
                          type="password"
                          value="password from you portal"
                          readonly=""
                        />
                      </p>
                      <p>
                        <label>Username</label>
                        <input
                          type="text"
                          value=""
                          placeholder="This shows on your questions and answers"
                        />
                      </p>
                    </div>
                    <div className="form-style form-style-2">
                      <div className="user-profile-img">
                        <img alt="admin" />
                      </div>
                      <p class="user-profile-p">
                        <label>Profile Picture</label>
                        <div className="fileinputs">
                          <input type="file" className="file" />
                          <div className="fakefile">
                            <button
                              type="button"
                              className="button small margin_0"
                            >
                              Select file
                            </button>
                            <span>
                              <i className="icon-arrow-up" />
                              Browse
                            </span>
                          </div>
                        </div>
                      </p>
                      <div className="clearfix" />
                    </div>
                    <div className="ul_list ul_list-icon-ok about-user">
                      <ul>
                        <li>
                          <label>
                            Courses :{" "}
                            <span>
                              List of Courses (Feel free to remove courses you
                              dont want to engage in)
                            </span>
                          </label>
                          <ul>
                            <li>
                              <a href="user_questions.html">MTH101</a>{" "}
                              <a>
                                <i class="icon-minus" />
                              </a>
                            </li>
                            <li>
                              <a href="user_questions.html">MHS920</a>{" "}
                              <a>
                                <i class="icon-minus" />
                              </a>
                            </li>
                            <li>
                              <a href="user_questions.html">KDK123</a>{" "}
                              <a>
                                <i class="icon-minus" />
                              </a>
                            </li>
                            <li>
                              <a href="user_questions.html">HJD129</a>{" "}
                              <a>
                                <i class="icon-minus" />
                              </a>
                            </li>
                            <li>
                              <a href="user_questions.html">JDJ132</a>{" "}
                              <a>
                                <i class="icon-minus" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>

                      <div class="register">
                        <a class="button color small signup">
                          Add More Courses
                        </a>
                      </div>

                      <p class="form-submit login-submit">
                        <input
                          type="submit"
                          value="Update Profile"
                          class="button color small login-submit submit"
                        />
                      </p>
                    </div>
                    <p class="form-submit">
                      <input
                        type="submit"
                        value="Update"
                        class="button color small login-submit submit"
                      />
                    </p>
                  </form>
                </div>
              </div>
              {/* end page-content */}
            </div>
            {/* end main */}
            <div className="col-md-3">
              <Aside />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default EditProfile;
