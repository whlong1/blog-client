// import styles from './Comments.module.css'
import CommentCard from '../CommentCard/CommentCard'


const Comments = ({ comments }) => {

  if (!comments) return <h4>No Comments</h4>

  return (
    <>
      {comments.map((comment) => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </>
  )
}

export default Comments