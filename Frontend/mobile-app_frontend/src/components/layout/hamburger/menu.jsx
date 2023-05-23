import styles from './Hamburger.module.scss'
import cn  from 'clsx'

const Menu = (isShow) => {
    return (
        <nav className={`${styles.menu} ${isComponentVisible ? styles.show: ''}`}>

        </nav>
    )
}
export default Menu
