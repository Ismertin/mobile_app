import cn from 'clsx'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import { TOKEN } from '../../../app.constants'
import { useAuth } from '../../../hooks/useAuth'

const Menu = ({ isShow, setIsShow }) => {
	const {setIsAuth} = useAuth()
	const navigate = useNavigate()
	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsShow(false)
		setIsAuth(false)

		navigate('/auth')
	}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
