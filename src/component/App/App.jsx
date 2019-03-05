import React, { Component } from "react";
import CommentCard from "../CommentCard/CommentCard";

class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <CommentCard comment="this is a comment" author="John" />
      </div>
    );
  }
}

export default App;
