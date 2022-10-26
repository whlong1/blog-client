import styles from './BlogList.module.css'
import BlogCard from "../../components/BlogCard/BlogCard"

const BlogList = (props) => {
  console.log('Data being passed down to BlogList:', props)
  return (
    <main className={styles.container}>
      {props.blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </main>
  )
}

export default BlogList