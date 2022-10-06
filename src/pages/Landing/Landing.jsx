import styles from './Landing.module.css'
import Logotype from '../../assets/branding/logotype.svg'

const Landing = () => {
  return (
    <main className={styles.container}>
      <img src={Logotype} alt="A cute owl." />
    </main>
  )
}

export default Landing