import React from "react";
import SetQuestions from "../SetQuestions";
import Aside from "../Aside";
class AskQuestions extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <section className="container main-content">
          <div className="row">
            <div className="col-md-9">
              <SetQuestions />
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

export default AskQuestions;
