import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
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
    <main>
      <header>
        <h1>{blog.title}</h1>
        <h3>By {blog.author.name}</h3>
      </header>
      <p>{blog.text}</p>
    </main>
  )
}

export default BlogDetails