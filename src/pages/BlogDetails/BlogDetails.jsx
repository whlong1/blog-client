import { useLocation, Link } from "react-router-dom"

const BlogDetails = (props) => {
  const { state } = useLocation()
  const isAuthor = props.user.profile === state.author._id

  const authorHeader = () => {
    return (
      <header>
        <button onClick={()=> props.handleDeleteBlog(state._id)}>
          Delete
        </button>
        <Link to='/blogs/edit' state={state}>Edit</Link>
      </header>
    )
  }

  return (
    <main>
      {isAuthor && authorHeader()}
      {state.title}
    </main>
  )
}

export default BlogDetails