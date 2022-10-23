import { useState } from "react"
import { Link } from "react-router-dom"
import Lottie from 'react-lottie-player'

// Components
import Icon from "../Icon/Icon"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

// Assets
import heartAnim from "../../assets/animation/heart.json"

const style = {
  width: "30px",
  height: "30px",
}

const Interactions = ({ id, user, blog, handleDeleteBlog }) => {
  const [play, setPlay] = useState(false)
  const [liked, setLiked] = useState(false)
  const [pending, setPending] = useState(false)
  const [direction, setDirection] = useState(1)

  const handleLike = () => {
    setPending(true)
    setPlay(true)
    setLiked(!liked)
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
      <button onClick={handleLike} style={{ padding: "0px" }} disabled={pending}>
        <Lottie
          play={play}
          speed={1}
          loop={false}
          style={style}
          segments={[10, 25]}
          direction={direction}
          animationData={heartAnim}
          onComplete={() => {
            setPlay(false);
            setDirection(direction * -1);
            setPending(false)
          }}
        />
      </button>
    </>
  )

  return (
    <span>
      <AuthorInfo content={blog} />
      {blog.author._id === user.profile ? authorOptions : readerOptions}
    </span>
  )
}

export default Interactions