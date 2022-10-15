import { useState } from "react"

const NewComment = ({ handleAddComment }) => {
  const [form, setForm] = useState({ text: '' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddComment(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Comment</h1>
      <label htmlFor="title-input">Text</label>
      <input
        required
        type="text"
        name="text"
        id="text-input"
        value={form.text}
        placeholder="Text"
        onChange={handleChange}
      />
      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default NewComment