import { useState } from "react"
import styles from './NewComment.module.css'
import Icon from "../Icon/Icon"

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
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={form.text}
        placeholder="Add a Comment"
        onChange={handleChange}
      />
      <button type="submit">
        <Icon category="Create" />
      </button>
    </form>
  )
}

export default NewComment