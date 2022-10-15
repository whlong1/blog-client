// import { Link } from "react-router-dom"
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment, user }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={comment} />
        {/* {comment.author._id === user.profile &&
          <>
            <Link to={`/`}>Edit</Link>
            <button>Delete</button>
          </>
        } */}
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default CommentCard