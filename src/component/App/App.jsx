import React, { Component } from "react";
// import CommentCard from "../CommentCard/CommentCard";
import CommentList from "../CommentList/CommentList";

class App extends Component {
  render() {
    const sampleData = [
      { author: "Jane", comment: "test" },
      { author: "John", comment: "test2" }
    ];
    return (
      <div className="container mt-3">
        <CommentList comments={sampleData} />
      </div>
    );
  }
}

export default App;
