import { Link } from "react-router-dom"

// Components
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const Interactions = ({ id, user, blog, handleDeleteBlog }) => {
  return (
    <span>
      <AuthorInfo content={blog} />
      {blog.author._id === user.profile &&
        <>
          <Link to={`/blogs/${id}/edit`} state={blog}>Edit</Link>
          <button onClick={() => handleDeleteBlog(id)}>Delete</button>
        </>
      }
    </span>
  )
}

export default Interactions