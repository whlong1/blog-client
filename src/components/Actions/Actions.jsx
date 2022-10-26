import { Link } from "react-router-dom"

// Components
import Icon from "../Icon/Icon"

const Actions = (props) => {
  const {
    id,
    user,
    blog,
    handleAddLike,
    handleRemoveLike,
    handleDeleteBlog,
  } = props

  const likeButton = (
    <button onClick={handleAddLike}>
      <Icon category="Like" />
    </button>
  )

  const likedButton = (
    <button onClick={handleRemoveLike}>
      <Icon category="Liked" />
    </button>
  )

  const authorOptions = (
    <>
      <Link to={`/blogs/${id}/edit`} state={blog}>
        <Icon category="Edit" />
      </Link>
      <button onClick={() => handleDeleteBlog(id)}>
        <Icon category="Trash" />
      </button>
    </>
  )

  const readerOptions = (
    <>
      <button>
        <Icon category={"Comments"} />
      </button>
      {blog.likes.includes(user.profile)
        ? likedButton
        : likeButton
      }
    </>
  )

  return (
    blog.author._id === user.profile ? authorOptions : readerOptions
  )
}

export default Actions