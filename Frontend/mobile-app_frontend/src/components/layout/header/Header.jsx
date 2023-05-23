import styles from './Header.module.scss'
import {useAuth} from "../../hooks/useAuth.js";
import {FaHamburger, FiArrowLeft} from "react-icons/all.js";
const Header = ({backLink}) => {
  const {isAuth} = useAuth()

  return <header className={styles.header}>
    <button onClick={() => {}}>
    <FiArrowLeft />
      </button>
    <Hamburger/>
  </header>
}

export default Header
