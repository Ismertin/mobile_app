import styles from "./Hamburger.module.scss";
import { cn } from 'clsx';

const menu = () => {
  return (
      <nav className={cn(styles.menu, { [styles.show]: isShow })}>
      <ul>
        {menu.map((item, idx) => (
            <li key={`_menu_${idx}`}>
                <Link to={item.link}>{item.title}</Link>

            </li>
        ))}>
              <li>
              <button onClick={handleLogout}>Logout</button>
              </li>
      </ul>
      </nav>
  )
}
export default menu