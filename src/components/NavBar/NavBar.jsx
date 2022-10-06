import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../assets/branding/logo.svg'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = () => {
    return (
      <ul>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    )
  }

  const protectedLinks = () => {
    return (
      <ul>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/profiles">Profiles</Link></li>
        <li><Link to="/changePassword">Change Password</Link></li>
        <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
      </ul>
    )
  }

  return (
    <nav className={styles.container}>
      <img src={Logo} alt="A cute owl" />
      {user ? protectedLinks() : publicLinks()}
    </nav>
  )
}

export default NavBar
