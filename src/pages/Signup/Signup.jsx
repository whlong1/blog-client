import { useState } from 'react'
import styles from './Signup.module.css'
import SignupForm from '../../components/SignupForm/SignupForm'
import SignupIcon from '../../assets/branding/signup.svg'


const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <img src={SignupIcon} alt="An owl sitting on a sign" />
      <h1>Sign Up</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup
