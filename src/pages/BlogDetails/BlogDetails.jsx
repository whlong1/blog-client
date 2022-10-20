import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './BlogDetails.module.css'

// Services
import * as blogService from '../../services/blogService'

// Components
import Loading from "../Loading/Loading"
import Comments from "../../components/Comments/Comments"
import NewComment from "../../components/NewComment/NewComment"
import Interactions from "../../components/Interactions/Interactions"

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

  const handleAddComment = async (commentData) => {
    const newComment = await blogService.createComment(id, commentData)
    setBlog({ ...blog, comments: [...blog.comments, newComment] })
  }

  const handleDeleteComment = async (blogId, commentId) => {
    await blogService.deleteComment(blogId, commentId)
    setBlog({ ...blog, comments: blog.comments.filter((c) => c._id !== commentId) })
  }

  if (!blog) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{blog.category.toUpperCase()}</h3>
          <h1>{blog.title}</h1>
          <Interactions
            id={id}
            blog={blog}
            user={props.user}
            handleDeleteBlog={props.handleDeleteBlog}
          />
        </header>
        <p>{blog.text}</p>
      </article>
      <section>
        <h1>Comments</h1>
        <NewComment handleAddComment={handleAddComment} />
        <Comments
          blogId={id}
          user={props.user}
          comments={blog.comments}
          handleDeleteComment={handleDeleteComment}
        />
      </section>
    </main>
  )
}

export default BlogDetails