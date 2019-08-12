import React, { Component } from "react";

import LoadQuestions from "../LoadQuestion";
import Aside from "../../views/Aside/index";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="container">
          <div className="row Home__main-content">
            <div className="col-md-9 ">
              <LoadQuestions />
            </div>
            <div className="col-md-3 sidebar">
              <Aside />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
