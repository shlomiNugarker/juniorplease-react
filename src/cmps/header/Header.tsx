import LogoJuniorsPlease from '../../assets/logos/LogoJuniorsPlease'
import styles from './_header.module.scss'
import { useNavigate } from 'react-router-dom'

import { CgMenuRight } from 'react-icons/cg'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span>
          <LogoJuniorsPlease />
        </span>
        <div className={styles.btns}>
          <button
            className={styles['sign-up']}
            onClick={() => navigate(`/login`)}
          >
            Sign Up
          </button>
          <button className={styles.login} onClick={() => navigate(`/login`)}>
            Login
          </button>
          <button className={styles.menu}>
            <CgMenuRight />
          </button>
        </div>
      </div>
    </header>
  )
}
