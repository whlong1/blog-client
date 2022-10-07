import styles from './Landing.module.css'
import Stars from '../../assets/branding/stars.svg'
import Logotype from '../../assets/branding/logotype.svg'
import Profile from '../../assets/branding/profile.png'

const Landing = () => {
  return (
    <main className={styles.container}>
      <section>
        <img src={Logotype} alt="A cute owl" />
      </section>
      <section className={styles.about}>
        <h4>HOO ARE YOU?</h4>
        <h1>ABOOT HOOT</h1>
      </section>
      <section className={styles.testimonial}>
        {/* <h4>WHO GIVES A HOOT?</h4>
        <h1>TESTIMONIALS</h1> */}

        <article>
          <header>
            <img id={styles.prof} src={Profile} alt="A satisfied user" />
            <h3>Ben Manley</h3>
            <p>Software Engineer</p>
          </header>
          <p>
            As a night owl, I have a hard time finding blogging apps that fit my lifestyle. <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
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