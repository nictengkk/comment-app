import React, { Component } from "react";
import CommentList from "./components/CommentList/CommentList"
import CommentForm from "./components/CommentForm/CommentForm"

class App extends Component {
  state = {
    comments: [
    {
      comment: "With great power comes great responsibility",
      author: "Peter Parker"
    },
    {
      comment: "I am going to make him an offer he can't refuse",
      author: "The Godfather"
    }
  ]}

  render() {
    return (
      <div className="container mt-5">
        <CommentForm handleSubmit={handleSubmit}/>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
