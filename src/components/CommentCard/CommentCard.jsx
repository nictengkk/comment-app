import React from 'react'

function CommentCard({comment, author}) {
  return (
    <blockquote className="blockquote text-center">
      <p className="mb-0">{comment}</p>
      <footer className="blockquote-footer"><cite title="Source Title">{author}</cite></footer>
    </blockquote>
  )
}

export default CommentCard
