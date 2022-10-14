import { Link } from "react-router-dom"
import styles from './BlogCard.module.css'

// Components
import Icon from "../Icon/Icon"
import AuthorTab from "../AuthorTab/AuthorTab"

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog._id}`}>
      <article className={styles.container}>
        <header>
          <Icon category={blog.category} />
          <h1>{blog.title}</h1>
          <AuthorTab content={blog} />
        </header>
        <p>{blog.text}</p>
      </article>
    </Link>
  )
}

export default BlogCard