import { useState } from "react"
import { Link } from "react-router-dom"
import Lottie from 'react-lottie-player'

import Icon from "../Icon/Icon"
import heartAnim from "../../assets/animation/heart.json"

import Tooltip from "../Tooltip/Tooltip"

const Actions = (props) => {
  const {
    user,
    blog,
    pending,
    handleScroll,
    handleAddLike,
    handleRemoveLike,
    handleDeleteBlog
  } = props

  const [direction, setDirection] = useState(1)
  const [play, setPlay] = useState(blog.likes.includes(user.profile))

  const handleClick = () => {
    setPlay(true)
    blog.likes.includes(user.profile) ? handleRemoveLike() : handleAddLike()
  }

  const authorOptions = (
    <>
      <Link to={`/blogs/${blog._id}/edit`} state={blog}>
        <Icon category="Edit" />
      </Link>
      <button onClick={() => handleDeleteBlog(blog._id)}>
        <Icon category="Trash" />
      </button>
    </>
  )

  const readerOptions = (
    <>
      {/* <Tooltip text={"HI"}> */}
      <button onClick={handleScroll}>
        <Icon category={"Comments"} />
      </button>
      {/* </Tooltip> */}

      <button style={{ padding: "0px" }} onClick={handleClick} disabled={play || pending}>
        <Lottie
          speed={1}
          play={play}
          loop={false}
          segments={[10, 25]}
          direction={direction}
          animationData={heartAnim}
          style={{ width: "30px", height: "30px" }}
          onComplete={() => { setPlay(false); setDirection(direction * -1) }}
        />
      </button>
    </>
  )

  return blog.author._id === user.profile ? authorOptions : readerOptions
}

export default Actions