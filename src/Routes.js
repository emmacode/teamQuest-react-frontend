import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AskQuestions from "./components/AskQuestions";
import Questions from "./components/Questions";
import Login from "./components/Login";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/ask_questions" component={AskQuestions} />
            <Route path="/questions" component={Questions} />
            <Route path="/login" component={Login} />
            <Route path="/user_profile" component={Profile} />
            <Route path="/edit_profile" component={EditProfile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
