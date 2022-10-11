import { Link } from "react-router-dom"
import Icon from "../Icon/Icon"

const BlogCard = ({ blog }) => {
  return (
    <article>
      <header>
        <h1>{blog.title}</h1>
        <h3>{blog.author.name}</h3>
        <Icon category={blog.category} />
      </header>
      <p>{blog.text}</p>
      <footer>
        <Link to={`/blogs/${blog._id}`} state={blog}>
          View Details
        </Link>
      </footer>
    </article>
  )
}

export default BlogCard