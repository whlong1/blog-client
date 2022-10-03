import BlogCard from "../../components/BlogCard/BlogCard"

const BlogList = (props) => {
  return (
    <div className="list">
      {props.blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  )
}

export default BlogList