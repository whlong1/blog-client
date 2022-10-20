import { Link } from "react-router-dom"

// Components
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const Interactions = ({ id, user, blog, handleDeleteBlog }) => {

  const authorOptions = (
    <>
      <Link to={`/blogs/${id}/edit`} state={blog}>Edit</Link>
      <button onClick={() => handleDeleteBlog(id)}>Delete</button>
    </>
  )

  const readerOptions = (
    <>
      <button>Comments</button>
      <button>Like</button>
    </>
  )

  return (
    <span>
      <AuthorInfo content={blog} />
      {blog.author._id === user.profile ? authorOptions : readerOptions}
    </span>
  )
}

export default Interactions