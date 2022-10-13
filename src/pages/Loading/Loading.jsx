import styles from './Logout.module.css'
import LoadingIcon from '../../assets/branding/loading.svg'

const Loading = () => {
  return (
    <main className={styles.container}>
      <img src={LoadingIcon} alt="A cute owl" />
    </main>
  )
}

export default Loading