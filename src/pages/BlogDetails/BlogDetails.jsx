import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './BlogDetails.module.css'

// Components
import UserCard from "../../components/UserCard/UserCard"

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

  console.log(blog)

  if (!blog) return <h1>Loading</h1>

  return (
    <main className={styles.container}>
      <header>
        <h1>{blog.title}</h1>
        <UserCard user={blog.author} />
      </header>
      <p>{blog.text}</p>
    </main>
  )
}

export default BlogDetails