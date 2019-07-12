import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AskQuestions from "./AskQuestions";
import Questions from "./Questions";
import Login from "./Login";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import "../App.css";
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/ask_questions" component={AskQuestions} />
          <Route path="/questions" component={Questions} />
          <Route path="/login" component={Login} />
          <Route path="/user_profile" component={Profile} />
          <Route path="/edit_profile" component={EditProfile} />
        </Switch>
      </div>
    );
  }
}

export default Main;
