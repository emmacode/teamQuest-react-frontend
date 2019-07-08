import React from "react";
class SetQuestions extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="page-content ask-question">
          <div className="boxedtitle page-title">
            <h2>Ask Question</h2>
          </div>
          <p>
            Ask your questions here, make sure the question is well written and
            precised, if it involves calculation please make sure you use th
            eright fomulaes and symbols
          </p>
          {/* form style */}
          <div className="form-style form-style-3" id="question-submit">
            <form>
              <div className="form-inputs clearfix">
                {/* question title */}
                <p>
                  <label className="required">
                    Question Title<span>*</span>
                  </label>
                  <input type="text" id="question-title" />
                  <span className="form-description">
                    Please choose an appropriate title for the question to
                    answer it even easier .
                  </span>
                </p>
                {/* end question title */}
                {/* topic */}
                <p>
                  <label>Topic</label>
                  <input
                    type="text"
                    className="input"
                    name="question_tags"
                    id="question_tags"
                    data-seperator=","
                  />
                  <span className="form-description">
                    Please choose suitable Keywords Ex :{" "}
                    <span className="color">question , poll</span> .
                  </span>
                </p>
                {/* end topic */}
                {/* COURSE */}
                <p>
                  <label className="required">
                    Course<span>*</span>
                  </label>
                  <span className="styled-select">
                    <select>
                      <option value="">Course</option>
                      <option value="1">Course 1</option>
                      <option value="2">Course 2</option>
                    </select>
                  </span>
                  <span className="form-description">
                    Please choose the course so easily search for your question
                    .
                  </span>
                </p>
                {/* end course */}
                {/* question poll */}
                <p className="question_poll_p">
                  <label for="question_poll">Optional Questions</label>
                  <input
                    type="checkbox"
                    id="question_poll"
                    value="1"
                    name="question_poll"
                  />
                  <span className="question_poll">
                    This question has options ?
                  </span>
                  <span className="poll-description">
                    If you want to add options click here .
                  </span>
                </p>
                {/* end of question poll */}
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
              <div id="form-textarea">
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
              </div>
              {/* end form text-area */}
              {/* form submit */}
              <p class="form-submit">
                <input
                  type="submit"
                  id="publish-question"
                  value="Publish Your Question"
                  class="button color small submit"
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

export default SetQuestions;
