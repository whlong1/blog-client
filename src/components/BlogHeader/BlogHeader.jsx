import styles from './BlogHeader.module.css'
import ProfileIcon from '../../assets/icons/profile.png'
import DateCard from "../../components/DateCard/DateCard"

const BlogHeader = ({ blog }) => {
  const avatar = blog.author.avatar ? blog.author.avatar : ProfileIcon
  return (
    <header className={styles.container}>
      <h3>MUSIC</h3>
      <h1>{blog.title}</h1>
      <div className={styles.authorship}>
        <img src={avatar} alt="The user's avatar" />
        <section>
          <h4>{blog.author.name}</h4>
          <DateCard createdAt={blog.createdAt} />
        </section>
      </div>
    </header>
  )
}

export default BlogHeader