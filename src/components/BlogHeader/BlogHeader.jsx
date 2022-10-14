import styles from './BlogHeader.module.css'
import AuthorTab from '../AuthorTab/AuthorTab'

const BlogHeader = ({ blog }) => {
  return (
    <header className={styles.container}>
      <h3>MUSIC</h3>
      <h1>{blog.title}</h1>
      <AuthorTab blog={blog} />
    </header>
  )
}

export default BlogHeader