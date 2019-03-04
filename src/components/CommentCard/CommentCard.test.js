import React from "react";
import "jest-dom/extend-expect"
import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";
import CommentCard from "./CommentCard";

describe("Comment Card", () => {
  test("card renders comment and author", () => {
    const props = {
      comment: "React testing library is great",
      author: "Luke Ghenco"
    };
    const { getByText } = render(<CommentCard {...props} />);

    expect(getByText(props.comment)).toBeInTheDocument()
    expect(getByText(props.author)).toBeInTheDocument()
  });
});
