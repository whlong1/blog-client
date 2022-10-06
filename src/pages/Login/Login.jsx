import { useState } from 'react'
import styles from './Login.module.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import LoginIcon from '../../assets/branding/login.svg'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <img src={LoginIcon} alt="An owl sitting on a sign" />
      <h1>Log In</h1>
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />
    </main>
  )
}

export default LoginPage
