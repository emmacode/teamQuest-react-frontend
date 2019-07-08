import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AskQuestions from "./AskQuestions";
import Questions from "./Questions";
import "../App.css";
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/ask_questions" component={AskQuestions} />
          <Route path="/questions" component={Questions} />
        </Switch>
      </div>
    );
  }
}

export default Main;
