import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <section className="container">
            <div className="row">
              {/* first col */}
              <div className="col-md-4">
                <div className="widget widget_contact">
                  <h3 className="widget_title">ProjectE?</h3>
                  <p>
                    An Online collaborative platform for students to
                    collaborate. Asking, answering questions as they earn points
                  </p>
                  <ul>
                    <li>
                      <span>Support :</span>Support Telephone No : 081111011110
                    </li>
                    <li>Support Email Account : info@example.com</li>
                  </ul>
                </div>
              </div>
              {/* second column */}
              <div className="col-md-4">
                <div className="widget">
                  <h3 className="widget_title">Quick Links</h3>
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
                <div className="widget">
                  <h3 className="widget_title">Popular Questions</h3>
                  <ul className="related-posts">
                    <li className="related-item">
                      <h3>
                        <a href="#">This is my first Question</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lorem quam.
                      </p>
                      <div className="clear" />
                      <span>Feb 22, 2014</span>
                    </li>
                    <li className="related-item">
                      <h3>
                        <a href="#">This Is My Second Poll Question</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lorem quam.
                      </p>
                      <div className="clear" />
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
        <footer id="footer-bottom">
          <section className="container">
            <div className="copyrights f_left">
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
