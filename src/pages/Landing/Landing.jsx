import styles from './Landing.module.css'
import Logotype from '../../assets/branding/logotype.svg'

const Landing = () => {
  return (
    <main className={styles.container}>
      <section>
        <img src={Logotype} alt="A cute owl" />
      </section>
      <section className={styles.about}>
        <h1>Aboot Hoot</h1>
        <h1>We Give A Hoot</h1>
      </section>
      <section>
        <h1>Testimonials</h1>
        <p>
          As a night owl, I have a hard time finding blogging apps that fit my lifestyle.
        </p>
      </section>
    </main>
  )
}

export default Landing