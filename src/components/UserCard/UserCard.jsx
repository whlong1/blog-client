import styles from './UserCard.module.css'
import ProfileIcon from '../../assets/icons/profile.png'

const UserCard = ({user}) => {
  const avatar = user.avatar ? user.avatar : ProfileIcon
  return(
    <div className={styles.container}>
      <img src={avatar} alt="The user's avatar" />
      <h3>{user.name}</h3>
    </div>
  )
}

export default UserCard