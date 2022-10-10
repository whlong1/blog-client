import { useState } from "react"

const NewBlog = (props) => {
  const [form, setForm] = useState({
    title: '',
    text: '',
    category: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  return (
    <main>
      <form>
        <input type="text" name="title" value={form.title} onChange={handleChange} />
        <input type="text" name="text" value={form.text} onChange={handleChange} />
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="News">News</option>
          <option value="Sports">Sports</option>
          <option value="Games">Games</option>
          <option value="Movies">Movies</option>
          <option value="Music">Music</option>
          <option value="Television">Television</option>
        </select>
      </form>
    </main>
  )
}

export default NewBlog