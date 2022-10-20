import { Link } from "react-router-dom"
import Icon from "../Icon/Icon"

// Components
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const Interactions = ({ id, user, blog, handleDeleteBlog }) => {

  const authorOptions = (
    <>
      <Link to={`/blogs/${id}/edit`} state={blog}>
        <Icon category="Edit" />
      </Link>
      <button onClick={() => handleDeleteBlog(id)}>
        <Icon category="Trash"/>
      </button>
    </>
  )

  const readerOptions = (
    <>
      <button>
        <Icon category={"Comments"} />
      </button>
      <button>
        <Icon category={"Like"} />
      </button>
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