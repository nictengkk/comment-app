import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { render, fireEvent } from "react-testing-library";
import CommentForm from "./CommentForm/";

describe("Comment Form", () => {
  test("has a text area, text input and submit button", () => {
    //arrange
    const samplePlaceholderText = "Write something...";
    //act
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <CommentForm />
    );
    //assert
    expect(getByPlaceholderText(samplePlaceholderText)).toBeInTheDocument();
    expect(getByLabelText("Your Name")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  test("on load, submit button is disabled", () => {
    const { getByText } = render(<CommentForm />);
    expect(getByText("Submit")).toHaveAttribute("disabled");
  });

  test("submit button is enabled when all fields are completed", () => {
    const sampleComment = "Some comment";
    const sampleAuthor = "Mary Jane";

    const { queryByText, getByLabelText, getByPlaceholderText } = render(
      <CommentForm />
    );

    const textArea = getByPlaceholderText("Write something..."); //creates the element
    const input = getByLabelText("Your Name"); //creates element
    fireEvent.change(textArea, { target: { value: sampleComment } }); // changes and fills the textArea defined with the value "some comment"
    fireEvent.change(input, { target: { value: sampleAuthor } }); // changes and fills the input with the value "Mary Jane"

    expect(queryByText("Submit")).not.toHaveAttribute("disabled");
  });
});
