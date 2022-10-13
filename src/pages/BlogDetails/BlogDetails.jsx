import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './BlogDetails.module.css'

// Components
import Loading from "../Loading/Loading"
import BlogHeader from "../../components/BlogHeader/BlogHeader"

// Services
import * as blogService from '../../services/blogService'

const BlogDetails = (props) => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await blogService.show(id)
      setBlog(data)
    }
    fetchBlog()
  }, [id])

  if (!blog) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <BlogHeader blog={blog} />
        <p>{blog.text}</p>
      </article>
    </main>
  )
}

export default BlogDetails