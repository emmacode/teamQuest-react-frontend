import React, { Component } from "react";
import LoadQuestion from "../LoadQuestion";
import Aside from "../Aside";
class Questions extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="container main-content">
          <div className="row">
            <div className="col-md-9">
              <LoadQuestion />
            </div>
            <div className="col-md-3">
              <Aside />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Questions;
