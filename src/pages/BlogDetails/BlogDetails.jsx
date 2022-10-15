import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './BlogDetails.module.css'

// Components
import Loading from "../Loading/Loading"
import Comments from "../../components/Comments/Comments"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import NewComment from "../../components/NewComment/NewComment"

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

  const handleAddComment = async (commentData) => {
    const newComment = await blogService.createComment(id, commentData)
    newComment.author = {
      _id: props.user.profile,
      name: props.user.name,
    }
    setBlog({ ...blog, comments: [...blog.comments, newComment] })
  }

  if (!blog) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>MUSIC</h3>
          <h1>{blog.title}</h1>
          <span>
            <AuthorInfo content={blog} />
            {blog.author._id === props.user.profile &&
              <>
                <Link to={`/blogs/${id}/edit`} state={blog}>Edit</Link>
                <button onClick={() => props.handleDeleteBlog(id)}>Delete</button>
              </>
            }
          </span>
        </header>
        <p>{blog.text}</p>
      </article>
      <section>
        <header><h1>Comments</h1></header>
        <NewComment handleAddComment={handleAddComment} />
        <Comments comments={blog.comments} user={props.user} />
      </section>
    </main>
  )
}

export default BlogDetails