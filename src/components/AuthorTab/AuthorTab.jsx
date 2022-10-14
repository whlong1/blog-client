import styles from './AuthorTab.module.css'
import ProfileIcon from '../../assets/icons/profile.png'
import DateCard from "../../components/DateCard/DateCard"

const AuthorTab = ({ blog }) => {
  const avatar = blog.author.avatar ? blog.author.avatar : ProfileIcon
  return (
    <div className={styles.container}>
      <img src={avatar} alt="The user's avatar" />
      <section>
        <h4>{blog.author.name}</h4>
        <DateCard createdAt={blog.createdAt} />
      </section>
    </div>
  )
}

export default AuthorTab