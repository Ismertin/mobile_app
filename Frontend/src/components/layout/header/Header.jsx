import { IoArrowBack } from 'react-icons/io5'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	/* TODO: React router useHistory */

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<IoArrowBack color='#fff' fontSize={29}/>
				
			</button>
			{/* User profile */}
			<Hamburger />
		</header>
	)
}

export default Header
