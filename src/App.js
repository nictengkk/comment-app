import React, { Component } from "react";
import CommentList from './components/CommentList/CommentList';

class App extends Component {
  render() {
    const comments = [{
      comment: "With great power comes great responsibility",
      author: "Peter Parker"
    },
    {
      comment: "I am going to make him an offer he can't refuse",
      author: "The Godfather"
    }
  ]
    return (
      <div className="container mt-5">
        <CommentList comments={comments}/>
      </div>
    );
  }
}

export default App;
