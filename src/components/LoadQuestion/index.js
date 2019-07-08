import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPosts } from "../../actions/postActions";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

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
    value: 0
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
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
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
