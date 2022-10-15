import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment }) => {
  console.log(comment)
  return (
    <article>
      <header>
        <AuthorInfo content={comment} />
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default CommentCard