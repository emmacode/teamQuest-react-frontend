import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CKEditor from "ckeditor4-react";

import { askQuestions } from "../../store/actions/postActions";
import "./index.css";

class SetQuestions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      course: "",
      questionPoll: ""
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      course: this.state.course,
      questionPoll: this.state.questionPoll
    };

    this.props.askQuestions(post);
  }

  render() {
    return (
      <React.Fragment>
        <div className="Setquestions__page-content Setquestions__ask-question">
          <div className="Setquestions__boxedtitle page-title">
            <h2>Ask Question</h2>
          </div>
          <p>
            Ask your questions here, make sure the question is well written and
            precised, if it involves calculation please make sure you use th
            eright fomulaes and symbols
          </p>
          {/* form style */}
          <div
            className="Setquestions__form-style Setquestions__form-style-3"
            id="question-submit"
          >
            <form onSubmit={this._handleSubmit}>
              <div className="Setquestions__form-inputs clearfix">
                {/* question title */}
                <p>
                  <label className="required">
                    Question Title<span>*</span>
                  </label>
                  <input
                    type="text"
                    id="question-title"
                    value={this.state.title}
                    onChange={this._handleChange}
                    name="title"
                  />
                  <span className="form-description">
                    Please choose an appropriate title for the question to
                    answer it even easier .
                  </span>
                </p>
                {/* end question title */}

                {/* COURSE */}
                <p>
                  <label className="required">
                    Course<span>*</span>
                  </label>
                  <span className="styled-select">
                    <select
                      value={this.state.course}
                      onChange={this._handleChange}
                      name="course"
                    >
                      <option value="MTH 201">MTH 201</option>
                      <option value="CSC 201">CSC 201</option>
                      <option value="CPE 203">CPE 203</option>
                    </select>
                  </span>
                  <span className="form-description">
                    Please choose the course so easily search for your question
                    .
                  </span>
                </p>
                {/* end course */}
                {/* optional question */}
                <p className="question_poll_p">
                  <label>Optional Questions</label>
                  <input
                    type="checkbox"
                    id="question_poll"
                    value={this.state.questionPoll}
                    onChange={this._handleChange}
                    name="question_poll"
                  />
                  <span className="question_poll">
                    This question has options ?
                  </span>
                  <span className="poll-description">
                    If you want to add options click here .
                  </span>
                </p>
                {/* end of optional question */}
                <div className="clearfix" />
                {/* Attachments */}
                <label>Attachment</label>
                <div className="fileinputs">
                  <input type="file" className="file" />
                  <div className="fakefile">
                    <button type="button" className="button small margin_0">
                      Select file
                    </button>
                    <span>
                      <i className="icon-arrow-up" />
                      Browse
                    </span>
                  </div>
                </div>
                {/* end attachment */}
              </div>
              {/* form text-area */}
              {/* <div id="form-textarea">
                <p>
                  <label class="required">
                    Details<span>*</span>
                  </label>
                  <textarea
                    id="question-details"
                    aria-required="true"
                    cols="58"
                    rows="8"
                  />
                  <span class="form-description">
                    Type the description thoroughly and in detail .
                  </span>
                </p>
              </div> */}

              <div>
                <CKEditor data="<p>Hello from CKEditor 4!</p>" />
              </div>

              {/* end form text-area */}
              {/* form submit */}
              <p className="Setquestions__form-submit">
                <input
                  type="submit"
                  id="publish-question"
                  value="Publish Your Question"
                  className="btn small submit"
                />
                {/* end form submit */}
              </p>
            </form>
          </div>
          {/* end page content */}
        </div>
        {/* end main */}
      </React.Fragment>
    );
  }
}

SetQuestions.propTypes = {
  askQuestions: PropTypes.func.isRequired
};

export default connect(
  null,
  { askQuestions }
)(SetQuestions);
