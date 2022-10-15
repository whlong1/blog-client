import { useState } from "react"
import styles from './NewComment.module.css'

const NewComment = ({ handleAddComment }) => {
  const [form, setForm] = useState({ text: '' })
  const [visible, setVisible] = useState(false)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddComment(form)
    setForm({ text: '' })
    setVisible(false)
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <span>
        <h3>New Comment</h3>
        <button type="button" onClick={() => setVisible(!visible)}>+</button>
      </span>
      {visible &&
        <>
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
        </>
      }
    </form>
  )
}

export default NewComment