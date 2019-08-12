import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//material-ui style
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import "./index.css";
import { fetchPosts } from "../../store/actions/postActions";
import { withStyles } from "@material-ui/core/styles";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class LoadQuestions extends React.Component {
  state = {
    value: 0,
    count: 0
  };

  _handleIncrease = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  _handleDecrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const postItems = this.props.posts.map((post, index) => (
      <div key={index} className="tab-inner-warp">
        <div className="tab-inner">
          <div className="Load__question Load__question-type-norm">
            <h2>{post.title}</h2>
            {/* <!-- Vote Shit --> */}
            <div className="vote-up">
              <div
                original-title="This answer is useful"
                className="question-author-vote tooltip-n"
                value="Increase Value"
              >
                <span />
                <div onClick={this._handleIncrease} />
              </div>
            </div>
            {/* <!-- vote value --> */}
            <div className="number-vote">{this.state.count}</div>
            {/* <!-- end of vote value --> */}
            {/* <!-- vote down --> */}
            <div className="vote-down">
              <div
                original-title="This answer is not useful"
                class="question-author-vote-down tooltip-s"
                value="Decrease Value"
                onClick="decreaseValue()"
              >
                <span />
                <div onClick={this._handleDecrease} />
              </div>
            </div>
            {/* <!-- End vote shit --> */}
            <div className="Load__question-inner">
              <p className="Load__question-desc">{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Recent Questions" />
            <Tab label="Most Responses" />
            <Tab label="Recently Answered" />
            <Tab label="No answers" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>{postItems}</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
      </div>
    );
  }
}

LoadQuestions.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

const k = withStyles(styles)(LoadQuestions);

export default connect(
  mapStateToProps,
  { fetchPosts }
)(k);
