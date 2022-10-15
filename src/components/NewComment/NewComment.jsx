import { useState } from "react"
import styles from './NewComment.module.css'

const NewComment = ({ handleAddComment }) => {
  const [form, setForm] = useState({ text: '' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddComment(form)
    setForm({ text: '' })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h3>New Comment</h3>
      <textarea
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