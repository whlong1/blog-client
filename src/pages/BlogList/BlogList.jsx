import BlogCard from "../../components/BlogCard/BlogCard"

const BlogList = (props) => {
  return (
    <main className="list">
      {props.blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </main>
  )
}

export default BlogList