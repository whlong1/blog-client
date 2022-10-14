import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './BlogDetails.module.css'

// Components
import Loading from "../Loading/Loading"
import AuthorTab from "../../components/AuthorTab/AuthorTab"

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
        <header className={styles.container}>
          <h3>MUSIC</h3>
          <h1>{blog.title}</h1>
          <AuthorTab content={blog} />
        </header>
        <p>{blog.text}</p>
      </article>
    </main>
  )
}

export default BlogDetails