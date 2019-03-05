import React from "react";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentCard
          key={index}
          comment={comment.comment}
          author={comment.author}
        />
      ))}
    </div>
  );
}
