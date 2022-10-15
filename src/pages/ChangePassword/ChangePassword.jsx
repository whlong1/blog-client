import { useState } from 'react'
import styles from './ChangePassword.module.css'
import SignupIcon from '../../assets/branding/signup.svg'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'

const ChangePassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <section>
        <img src={SignupIcon} alt="An owl sitting on a sign" />
      </section>
      <section>
        <ChangePasswordForm
          {...props}
          message={message}
          updateMessage={updateMessage}
        />
      </section>
    </main>
  )
}

export default ChangePassword
