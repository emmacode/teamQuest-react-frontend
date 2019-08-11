import React from "react";
import { NavLink } from "react-router-dom";
class Profile extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <section className="container main-content">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="user-profile">
                  <div className="col-md-12">
                    <div className="page-content">
                      <h2>
                        <NavLink to="/user_profile">Your Profile</NavLink>
                      </h2>
                      {/* profile image */}
                      <div className="user-profile-img">
                        <img width="60" height="60" alt="admin" />
                      </div>
                      {/* end profile image */}
                      <br />
                      <br />
                      <div className="ul_list ul_list-icon-ok about-user">
                        <ul>
                          <li>
                            <i class="icon-plus" />
                            Name : <span>Tofmat Okoko</span>
                          </li>
                          <li>
                            <i class="icon-plus" />
                            Department : <span>Computer Science</span>
                          </li>
                          <li>
                            <i class="icon-plus" />
                            Level: <span>200 Level</span>
                          </li>
                          <li>
                            <i class="icon-plus" />
                            Courses :{" "}
                            <span>
                              List of Courses (Feel free to remove courses you
                              dont want to engage in)
                            </span>
                            <ul>
                              <li>
                                <NavLink to="/user_questions">MTH101</NavLink>{" "}
                                <NavLink>
                                  <i class="icon-minus" />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/user_questions">MHS920</NavLink>{" "}
                                <NavLink>
                                  <i class="icon-minus" />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/user_questions">KDK123</NavLink>{" "}
                                <NavLink>
                                  <i class="icon-minus" />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/user_questions">HJD129</NavLink>{" "}
                                <NavLink>
                                  <i class="icon-minus" />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/user_questions">JDJ132</NavLink>{" "}
                                <NavLink>
                                  <i class="icon-minus" />
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <p className="form-submit login-submit">
                          <center>
                            <NavLink
                              to="/edit_profile"
                              className="button color small"
                              Value="Edit Profile"
                            >
                              Edit Profile
                            </NavLink>
                          </center>
                        </p>
                      </div>
                      <div className="clearfix" />
                    </div>
                    {/* end page-content */}
                  </div>
                  {/* end col-md-12 */}
                  <div className="col-md-12">
                    <div className="page-content page-content-user-profile">
                      <div className="user-profile-widget">
                        <h2>User Stats</h2>
                        <div className="ul_list ul_list-icon-ok">
                          <ul>
                            <li>
                              <i className="icon-question-sign" />
                              <NavLink to="/user_questions">
                                Questions
                                <span>
                                  {" "}
                                  ( <span>30</span> ){" "}
                                </span>
                              </NavLink>
                            </li>
                            <li>
                              <i className="icon-comment" />
                              Answers
                              <span>
                                {" "}
                                ( <span>10</span> ){" "}
                              </span>
                            </li>
                            <li>
                              <i className="icon-star" />
                              <NavLink to="/user_favorite_questions.html">
                                Favorite Questions
                                <span>
                                  {" "}
                                  ( <span>3</span> ){" "}
                                </span>
                              </NavLink>
                            </li>
                            <li>
                              <i className="icon-asterisk" />
                              Approved Answers
                              <span>
                                {" "}
                                ( <span>2</span> ){" "}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* end user profile widget */}
                    </div>
                    {/* end page content */}
                  </div>
                  <div className="col-md-12">
                    <div className="page-content page-content-user-profile">
                      <div className="user-profile-widget">
                        <h2>User Points:100</h2>
                      </div>
                      {/* End user-profile-widget */}
                    </div>
                    {/* End page-content */}
                  </div>
                  {/* End col-md-12 */}
                </div>
                {/* end user profile */}
              </div>
              {/* end row */}
              <div class="clearfix" />
              <div className="page-content">
                <div className="user-stats">
                  <div className="user-stats-head">
                    <div className="block-stats-1 stats-head">#</div>
                    <div className="block-stats-2 stats-head">Today</div>
                    <div className="block-stats-3 stats-head">Month</div>
                    <div className="block-stats-4 stats-head">Total</div>
                  </div>
                  <div class="user-stats-item">
                    <div class="block-stats-1">Answers</div>
                    <div class="block-stats-2">30</div>
                    <div class="block-stats-3">150</div>
                    <div class="block-stats-4">1000</div>
                  </div>
                  <div class="user-stats-item user-stats-item-last">
                    <div class="block-stats-1">Visitors</div>
                    <div class="block-stats-2">100</div>
                    <div class="block-stats-3">3000</div>
                    <div class="block-stats-4">5000</div>
                  </div>
                </div>
                {/* end of user stats */}
              </div>
              {/* end page content */}
            </div>
            {/* end main */}
            {/* <aside className="col-md-3 sidebar">
              <div className="widget widget_highest_points">
                <h3 className="widget_title">Leaderboard</h3>
                <ul>
                  <li>
                    <div className="author-img">
                      <a href="#">
                        <img width="60" height="60" alt="" />
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
                        <img width="60" height="60" alt="" />
                      </a>
                    </div>
                    <h6>
                      <a href="#">vbegy</a>
                    </h6>
                    <span className="comment">10 Points</span>
                  </li>
                </ul>
              </div>
            </aside> */}
            {/* end sidebar */}
          </div>
          {/* end row */}
        </section>
        {/* end container */}
      </React.Fragment>
    );
  }
}

export default Profile;
