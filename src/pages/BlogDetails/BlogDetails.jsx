import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './BlogDetails.module.css'

// Services
import * as blogService from '../../services/blogService'

// Components
import Loading from "../Loading/Loading"
import Actions from "../../components/Actions/Actions"
import Comments from "../../components/Comments/Comments"
import NewComment from "../../components/NewComment/NewComment"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const BlogDetails = (props) => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [pending, setPending] = useState(false)

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

  const handleAddLike = async () => {
    setPending(true)
    await blogService.addLike(id)
    setBlog({ ...blog, likes: [...blog.likes, props.user.profile] })
    setPending(false)
  }

  const handleRemoveLike = async () => {
    setPending(true)
    await blogService.removeLike(id)
    setBlog({ ...blog, likes: blog.likes.filter((l) => l !== props.user.profile) })
    setPending(false)
  }

  if (!blog) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{blog.category.toUpperCase()}</h3>
          <h1>{blog.title}</h1>
          <span>
            <AuthorInfo content={blog} />
            <Actions
              blog={blog}
              pending={pending}
              user={props.user}
              handleAddLike={handleAddLike}
              handleRemoveLike={handleRemoveLike}
              handleDeleteBlog={props.handleDeleteBlog}
            />
          </span>
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