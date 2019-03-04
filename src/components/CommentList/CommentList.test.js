import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import CommentList from "./CommentList";

describe("Comment List", () => {
  test("can list out comments", () => {
    const comment1 = {
      comment: "With great power comes great responsibility",
      author: "Peter Parker"
    };
    const comment2 = {
      comment: "I am going to make him an offer he can't refuse",
      author: "The Godfather"
    };
    const props = { comments: [comment1, comment2] };

    const { getByText } = render(<CommentList {...props} />);

    expect(getByText(comment1.comment)).toBeInTheDocument();
    expect(getByText(comment2.comment)).toBeInTheDocument();
  });
});
