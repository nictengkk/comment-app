import React from "react";
import CommentCard from '../CommentCard/CommentCard';

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment, index )=> (
        <CommentCard key={index} comment={comment.comment} author={comment.author}/>
      ))}
    </div>
  );
}

export default CommentList;
