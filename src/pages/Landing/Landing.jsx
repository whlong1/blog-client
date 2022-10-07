import styles from './Landing.module.css'
import Stars from '../../assets/branding/stars.svg'
import Logotype from '../../assets/branding/logotype.svg'
import Profile from '../../assets/branding/profile.png'

const Landing = () => {
  return (
    <main className={styles.container}>

      <section className={styles.splash}>
        <img src={Logotype} alt="A cute owl" />
      </section>

      <section className={styles.about}>
        <h3>HOO ARE YOU?</h3>
        <h1>ABOOT HOOT</h1>
      </section>

      <section className={styles.testimonial}>

        <header>
          <h3>WHO GIVES A HOOT?</h3>
          <h1>TESTIMONIALS</h1>
        </header>

        <article>
          <header>
            <img id={styles.prof} src={Profile} alt="A satisfied user" />
            <h4>Ben Manley</h4>
            <p>Software Engineer</p>
          </header>
          <p>
            As a night owl, I have a hard time finding blogging apps that fit my lifestyle. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
          <footer>
            <img src={Stars} alt="Four blue stars" />
          </footer>
        </article>

      </section>
    </main>
  )
}

export default Landing