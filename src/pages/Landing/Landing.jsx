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
        <header>
          <h3>WHO WE ARE</h3>
          <h1>ABOUT US</h1>
        </header>

        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing 
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </article>


      </section>

      <section className={styles.testimonial}>

        <header>
          <h3>WHO GIVES A HOOT?</h3>
          <h1>TESTIMONIALS</h1>
        </header>

        <article>
          <header>
            <h4>Ben Manley</h4>
            <p>Software Engineer</p>
          </header>
          <p>
            As a night owl, I have a hard time finding blogging apps that fit my lifestyle. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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