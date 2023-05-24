import styles from './Hamburger.module.scss'
import cn  from 'clsx'

const Menu = (isShow) => {
    return (
        <nav className={cn(styles.menu, {[styles.show]: isShow})}>
        </nav>
    )
}
export default Menu
