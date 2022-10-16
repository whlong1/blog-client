import styles from './UserCard.module.css'
import ProfileIcon from '../../assets/icons/profile.png'

const UserCard = ({ user }) => {
  const photo = user.photo ? user.photo : ProfileIcon
  return (
    <div className={styles.container}>
      <img src={photo} alt="The user's photo" />
      <h3>{user.name}</h3>
    </div>
  )
}

export default UserCard