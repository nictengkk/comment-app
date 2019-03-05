import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import CommentCard from "./CommentCard";
import "react-testing-library/cleanup-after-each";

//describe component, place all tests within describe, all tests are relevant to component in description
describe("Comment Card", () => {
  test("displays name and comment", () => {
    //Arrange (input sample data)
    const sampleComment = "Do or do not, there is not try";
    const sampleAuthor = "Yoda";
    const props = {
      comment: sampleComment,
      author: sampleAuthor
    };

    //Act (trigger something i.e render, fireEvent, )
    const { getByText } = render(<CommentCard {...props} />);
    //Assert (check the result with expect (to/not.to) to see if it works or not)
    expect(getByText(sampleComment)).toBeInTheDocument();
    expect(getByText(sampleAuthor)).toBeInTheDocument();
  });
});
//   xtest("", () => {});
// });
