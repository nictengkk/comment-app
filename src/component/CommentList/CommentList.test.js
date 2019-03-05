import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import CommentList from "./CommentList";

describe("Comment List", () => {
  test("render a list of comments", () => {
    const comment1 = {
      comment: "With power comes great responsibility",
      author: "Peter Parker"
    };
    const comment2 = {
      comment: "Do or do not, there is no try.",
      author: "Yoda"
    };
    const sampleList = [comment1, comment2];

    const { getByText } = render(<CommentList comments={sampleList} />);

    expect(getByText(comment1.comment)).toBeInTheDocument();
    expect(getByText(comment2.comment)).toBeInTheDocument();
  });
});
