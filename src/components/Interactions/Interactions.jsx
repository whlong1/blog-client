import { Link } from "react-router-dom"
import Liked from '../../assets/icons/liked.svg'

// Components
import Icon from "../Icon/Icon"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const Interactions = ({ id, user, blog, handleDeleteBlog }) => {
  const LikedIcon = <img src={Liked} alt="A heart" />

  const authorOptions = (
    <>
      <Link to={`/blogs/${id}/edit`} state={blog}>
        {/* <Icon category="Edit" /> */}
        Edit
      </Link>
      <button onClick={() => handleDeleteBlog(id)}>
        {/* <Icon category="Trash" /> */}
        Delete
      </button>
    </>
  )

  const readerOptions = (
    <>
      <button><Icon category={"Comments"} /></button>
      <button><Icon category={"Like"} /></button>
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