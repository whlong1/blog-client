import { useLocation } from "react-router-dom"

const BlogDetails = (props) => {
  const { state } = useLocation()
  console.log(state)
  return (
    <main>
      {state.title}
    </main>
  )
}

export default BlogDetails