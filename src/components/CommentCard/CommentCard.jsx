import AuthorTab from "../AuthorTab/AuthorTab"

const CommentCard = ({ comment }) => {
  console.log(comment)
  return (
    <article>
      <header>
        <AuthorTab content={comment} />
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default CommentCard