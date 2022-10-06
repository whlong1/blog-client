import { Link } from "react-router-dom"
import Icon from "../Icon/Icon"

const BlogCard = ({ blog }) => {
  const isPlural = (arr, txt) => arr.length !== 1
    ? arr.length + ' ' + txt + 's'
    : arr.length + ' ' + txt

  console.log(blog)
  return (
    <article className="card">
      <header>
        <h1>{blog.author.name}</h1>
        <h4>{isPlural(blog.author.blogs, 'Blog')}</h4>
        <Icon category={blog.category} />
      </header>
      <p>{blog.text}</p>
      <footer>
        <Link to={`/blogs/${blog._id}`}>
          View {isPlural(blog.comments, 'Comment')}
        </Link>
      </footer>
    </article>
  )
}

export default BlogCard