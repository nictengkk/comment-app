import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import CommentForm from "./CommentForm";
import { fireEvent } from "react-testing-library/dist";

describe("Comment Form", () => {
  test("On load button is disabled", () => {
    const { getByText } = render(<CommentForm />);
    expect(getByText("Submit")).toHaveAttribute("disabled");
  });

  test("button is enabled if textbox and name field is filled", () => {
    const sampleComment = "Do or do not, there is no try"
    const sampleAuthor = "Yoda"

    const { getByPlaceholderText, getByLabelText, queryByText } = render(<CommentForm />);

    const commentTextBox = getByPlaceholderText("Enter a comment...")
    const nameInput = getByLabelText("Your Name")
    fireEvent.change(commentTextBox, { target: { value: sampleComment } });
    fireEvent.change(nameInput, { target: { value: sampleAuthor } });

    expect(queryByText("Submit")).not.toHaveAttribute("disabled")
  });
});
