import React, { Component } from "react";
// import CommentCard from "../CommentCard/CommentCard";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

class App extends Component {
  state = {
    comments: []
  };

  handleSubmit = (author, comment) => {
    const newComment = { author, comment };
    this.setState({ comments: [...this.state.comments, newComment] });
  };

  render() {
    return (
      <div className="container mt-3">
        <CommentForm handleSubmit={this.handleSubmit} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
