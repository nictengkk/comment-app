import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { render, fireEvent, getAllByLabelText } from "react-testing-library";
import App from "./App";

describe("App", () => {
  test("New comment can be created", () => {
    //arrange
    const sampleComment = "What a game!";
    const sampleAuthor = "Mary Jane";

    //act
    const {
      container,
      getByText,
      getByLabelText,
      getByPlaceholderText
    } = render(<App />);
    const textArea = getByPlaceholderText("Write something..."); //creates the element
    const input = getByLabelText("Your Name"); //creates element
    const button = getByText("Submit");
    fireEvent.change(textArea, { target: { value: sampleComment } }); // changes and fills the textArea defined with the value "some comment"
    fireEvent.change(input, { target: { value: sampleAuthor } }); // changes and fills the input with the value "Mary Jane"
    fireEvent.click(button);

    //assert
    const allComments = container.querySelectorAll("blockquote");
    expect(allComments.length).toEqual(1);
  });
});
