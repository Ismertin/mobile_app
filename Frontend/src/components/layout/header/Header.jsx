import { IoArrowBack } from 'react-icons/io5'
import { HiOutlineUser } from 'react-icons/hi'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = ({ backLink = '' }) => {
	/* TODO: React router useHistory */

	const { pathname } = useLocation()

	const navigate = useNavigate()

	const {isAuth} = useAuth()


	return (
		<header className={styles.header}>
			{pathname !== '/'  || !isAuth && pathname !== 'auth' ? (
				<button
					onClick={() => {
						navigate(isAuth ? backLink : '/auth')
					}}
				>
					<IoArrowBack color="#fff" fontSize={29} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<HiOutlineUser color="#fff" fontSize={29} />
				</button>
			)}
			{isAuth && <Hamburger />}
		</header>
	)
}

export default Header
