import React, { Component, useState } from "react";

function CommentForm() {
  const [commentTextArea, setCommentTextArea] = useState("");
  const [authorInput, setAuthorInput] = useState("");

  const isUnfilled = () => {
    //if authorInput and commentTextArea has input, return false
    const res = !(authorInput && commentTextArea);
    return res;
  };

  const handleAuthorInput = event => {
    setAuthorInput(event.target.value);
  };

  const handleCommentTextArea = event => {
    setCommentTextArea(event.target.value);
  };

  const placeholderText = "Write something...";
  return (
    <form>
      <div className="form-group">
        <textarea
          onChange={handleCommentTextArea}
          value={commentTextArea}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder={placeholderText}
        />
      </div>
      <div>
        <label htmlFor="name-input">Your Name</label>
        <input
          className="form-control mb-2"
          type="text"
          id="name-input"
          value={authorInput}
          onChange={handleAuthorInput}
        />
      </div>
      <button disabled={isUnfilled()} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
