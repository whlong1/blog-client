import { useState } from "react"
import { Link } from "react-router-dom"
import Lottie from 'react-lottie-player'

// Components
import Icon from "../Icon/Icon"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

// Assets
import heartAnim from "../../assets/animation/heart.json"

const Interactions = (props) => {
  const {
    id,
    user,
    blog,
    pending,
    handleAddLike,
    handleRemoveLike,
    handleDeleteBlog,
  } = props

  const [direction, setDirection] = useState(1)
  const [animActive, setAnimActive] = useState(false)
  const [play, setPlay] = useState(blog.likes.includes(user.profile))

  const handleClick = () => {
    setPlay(true)
    setAnimActive(true)
    if (blog.likes.includes(user.profile)) {
      handleRemoveLike()
    } else {
      handleAddLike()
    }
  }

  const authorOptions = (
    <>
      <Link to={`/blogs/${id}/edit`} state={blog}>
        <Icon category="Edit" />
      </Link>
      <button onClick={() => handleDeleteBlog(id)}>
        <Icon category="Trash" />
      </button>
    </>
  )

  const readerOptions = (
    <>
      <button>
        <Icon category={"Comments"} />
      </button>
      <button onClick={handleClick} style={{ padding: "0px" }} disabled={animActive || pending}>
        <Lottie
          style={{
            width: "30px",
            height: "30px"
          }}
          play={play}
          speed={1}
          loop={false}
          segments={[10, 25]}
          direction={direction}
          animationData={heartAnim}
          onComplete={() => {
            setPlay(false);
            setAnimActive(false);
            setDirection(direction * -1);
          }}
        />
      </button>
    </>
  )

  return (
    blog.author._id === user.profile ? authorOptions : readerOptions
  )
}

export default Interactions