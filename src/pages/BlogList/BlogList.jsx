const BlogList = (props) => {
  return (
    <div className="list">
      {props.blogs.map((blog) => (
        <div className="card" key={blog._id}>
          {blog.text}
        </div>
      ))}
    </div>
  )
}

export default BlogList