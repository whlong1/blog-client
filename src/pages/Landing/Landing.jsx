import styles from './Landing.module.css'
import Logotype from '../../assets/branding/logotype.svg'

const Landing = () => {
  return (
    <main className={styles.container}>
      <img src={Logotype} alt="A cute owl" />
      {/* As a night owl, I have a hard time finding blogging apps that fit my lifestyle. */}
    </main>
  )
}

export default Landing