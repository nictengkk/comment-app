import React, { useState } from "react";

function CommentForm() {
  const [commentTextBox, setCommentTextBox] = useState("");
  const [nameInput, setNameInput] = useState("");

  const handleTextBox = event => {
    setCommentTextBox(event.target.value);
  };

  const handleNameInput = event => {
    setNameInput(event.target.value);
  };

  const isFilled = () => {
    return !(commentTextBox && nameInput);
  };
  return (
    <form>
      <div className="form-group">
        <textarea
          value={commentTextBox}
          className="form-control"
          onChange={handleTextBox}
          placeholder="Enter a comment..."
          name="comment-text-box"
          id=""
          cols="30"
          rows="10"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name-input">Your Name</label>
        <input
          value={nameInput}
          className="form-control"
          onChange={handleNameInput}
          id="name-input"
          type="text"
        />
      </div>
      <button disabled={isFilled()} className="btn btn-primary">Submit</button>
    </form>
  );
}

export default CommentForm;
