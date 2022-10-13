import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../assets/branding/logo.svg'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = () => {
    return (
      <ul>
        <li><Link to="/login">LOG IN</Link></li>
        <li><Link to="/signup">SIGN UP</Link></li>
      </ul>
    )
  }

  const protectedLinks = () => {
    return (
      <ul>

        <li><Link to="/blogs">BLOGS</Link></li>
        <li><Link to="/blogs/new">NEW BLOG</Link></li>
        <li><Link to="/profiles">PROFILES</Link></li>
        <li><Link to="/logout" onClick={handleLogout}>LOG OUT</Link></li>
      </ul>
    )
  }

  return (
    <nav className={styles.container}>
      <Link to={'/'}><img src={Logo} alt="A cute owl" /></Link>
      {user ? protectedLinks() : publicLinks()}
    </nav>
  )
}

export default NavBar