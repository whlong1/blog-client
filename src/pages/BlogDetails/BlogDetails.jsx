import { useLocation, Link } from "react-router-dom"

const BlogDetails = (props) => {
  const { state } = useLocation()
  return (
    <main>
      {state.title}
      <Link to='/blogs/edit' state={state}>Edit</Link>
    </main>
  )
}

export default BlogDetails