import { Link } from "react-router-dom"

const BlogCard = ({ blog }) => {
  const isPlural = (arr, txt) => arr.length !== 1
    ? arr.length + ' ' + txt + 's'
    : arr.length + ' ' + txt

  return (
    <article className="card">
      <header>
        <h1>{blog.author.name}</h1>
        <h4>{isPlural(blog.author.blogs, 'Blog')}</h4>
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