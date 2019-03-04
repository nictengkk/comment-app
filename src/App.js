import React, { Component } from "react";
import CommentCard from "./components/CommentCard/CommentCard";

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <CommentCard comment="Do or do not, there is no try" author="Yoda"/>
      </div>
    );
  }
}

export default App;
