import { useLocation, Link } from "react-router-dom"

const BlogDetails = ({ user }) => {
  const { state } = useLocation()
  const isAuthor = user.profile === state.author._id

  const authorHeader = () => {
    return (
      <header>
        <button>Delete</button>
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