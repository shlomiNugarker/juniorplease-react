import { Header } from '../../cmps/header/Header'

import styles from './_home-page.module.scss'

import rotatingAvatarsSrc from '../../assets/imgs/hero-sections-rotating-avatars.png'

type Props = {}

export const HomePage = (props: Props) => {
  return (
    <section className={styles['home-page']}>
      {/* background */}
      <div className={styles.bg}>
        <span className={styles['l-side']}></span>
        <span className={styles.middle}></span>
        <span className={styles['r-side']}></span>
      </div>

      <Header></Header>

      <div className={styles.container}>
        {/* become a junior */}
        <section className={styles['become-junior']}>
          <p className={styles['scroll-p']}>More Than 5000 Projects</p>
          <h1>
            <span>We Make </span> Juniors
            <br /> Capable For <span>Projects</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit <br />
            magnam placeat rerum quibusdam unde iusto.
          </p>
          <button className={styles.btn}>Become a Junior</button>
        </section>
        <section className={styles['rotating-avatars']}>
          <img src={rotatingAvatarsSrc} alt="" />
        </section>
      </div>
    </section>
  )
}
