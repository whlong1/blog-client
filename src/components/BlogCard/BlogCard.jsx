import { Link } from "react-router-dom"
import styles from './BlogCard.module.css'

// Components
import Icon from "../Icon/Icon"
import AuthorTab from "../AuthorTab/AuthorTab"

const BlogCard = ({ blog }) => {
  return (
    <article className={styles.container}>
      <header>
        <h1>{blog.title}</h1>
        <AuthorTab content={blog} />
        {/* <Icon category={blog.category} /> */}
      </header>
      {/* <p>{blog.text}</p> */}
      <footer>
        <Link to={`/blogs/${blog._id}`} state={blog}>
          View Details
        </Link>
      </footer>
    </article>
  )
}

export default BlogCard