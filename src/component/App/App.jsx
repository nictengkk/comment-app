import React, { Component } from "react";
// import CommentCard from "../CommentCard/CommentCard";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

class App extends Component {
  render() {
    const sampleData = [
      { author: "Jane", comment: "test" },
      { author: "John", comment: "test2" }
    ];
    return (
      <div className="container mt-3">
        <CommentForm />
        <CommentList comments={sampleData} />
      </div>
    );
  }
}

export default App;
