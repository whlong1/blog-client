import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './BlogDetails.module.css'

// Components
import Icon from '../../components/Icon/Icon'
import UserCard from "../../components/UserCard/UserCard"

// Services
import * as blogService from '../../services/blogService'

const BlogDetails = (props) => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const date = new Date(blog?.createdAt).toDateString()

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await blogService.show(id)
      setBlog(data)
    }
    fetchBlog()
  }, [id])

  console.log(date)

  if (!blog) return <h1>Loading</h1>

  return (
    <main className={styles.container}>
      <article>
        <header>
          <Icon category={blog.category} />
          <h4>MUSIC</h4>
          <h1>{blog.title}</h1>
          <UserCard user={blog.author} />
          <div>
            <Icon category="Calendar" />
            <h5>{date}</h5>
          </div>
        </header>
        <p>{blog.text}</p>
      </article>
    </main>
  )
}

export default BlogDetails