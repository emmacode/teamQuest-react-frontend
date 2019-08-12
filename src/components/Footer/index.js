import React, { Component } from "react";

import "./index.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <section className="container">
            <div className="row">
              {/* first col */}
              <div className="col-md-4">
                <div className="Footer__widget Footer__widget_contact">
                  <h3 className="Footer__widget_title">Quest?</h3>
                  <p>
                    An Online collaborative platform for students to
                    collaborate. Asking, answering questions and earn points
                  </p>
                  <ul>
                    <li>
                      <span>Support :</span>Support Telephone No : 08145485678
                    </li>
                    <li>Support Email Account : quests@example.com</li>
                  </ul>
                </div>
              </div>
              {/* second column */}
              <div className="col-md-4">
                <div className="Footer__widget">
                  <h3 className="Footer__widget_title">Quick Links</h3>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="ask_question.html">Ask Question</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="cat_question.html">Questions</a>
                    </li>
                    <li>
                      <a href="user_profile.html">Accounts</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* third column */}
              <div className="col-md-4">
                <div class="Footer__widget">
                  <h3 class="Footer__widget_title">Popular Questions</h3>
                  <ul class="related_posts">
                    <li class="related_item">
                      <h3>
                        <a href="#">This is my first Question</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lorem quam.
                      </p>
                      <div class="clear" />
                      <span>Feb 22, 2014</span>
                    </li>
                    <li class="related_item">
                      <h3>
                        <a href="#">This Is My Second Poll Question</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lorem quam.
                      </p>
                      <div class="clear" />
                      <span>Feb 22, 2014</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end row */}
          </section>
          {/* end container */}
        </footer>
        {/* end footer */}
        <footer id="Footer__footer_bottom">
          <section className="container">
            <div className="Footer__copyrights f_left">
              Copyright 2019 | ProjectE <a href="#">By TeamQuest</a>
            </div>
          </section>
          {/* end container */}
        </footer>
        {/* end footer bottom */}
      </React.Fragment>
    );
  }
}

export default Footer;
