import { FETCH_POSTS, NEW_POST, LOGIN, ASK_QUESTION } from "./types";

const BASE_URL = "http://localhost:8000/api";

//ASK_QUESTION state
export const askQuestions = postData => dispatch => {
  console.log("submitting question");
  fetch(BASE_URL + "/questions", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => {
      console.log(post);
      dispatch({
        type: ASK_QUESTION,
        payload: post
      });
    });
};
//end ask_question state

//login state
export const login = postData => dispatch => {
  fetch(BASE_URL + "/login", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => {
      console.log(post);
      dispatch({
        type: LOGIN,
        payload: post
      });
    });
};
//end login state

//fectch_post state
export const fetchPosts = () => dispatch => {
  console.log("fetching");
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then(res => res.json())
  //   .then(posts =>
  //     dispatch({
  //       type: FETCH_POSTS,
  //       payload: posts
  //     })
  //   );
  let posts = [
    {
      title: "This Is My First Normal Question",
      body:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit."
    },
    {
      title: "This Is My Second Poll Question",
      body:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit."
    },
    {
      title: "This Is My Third Poll Question",
      body:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit."
    }
  ];
  dispatch({
    type: FETCH_POSTS,
    payload: posts
  });
};
//end fetch_post

//createPost state
export const createPost = postData => dispatch => {
  console.log("action called");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
//end createPost state
