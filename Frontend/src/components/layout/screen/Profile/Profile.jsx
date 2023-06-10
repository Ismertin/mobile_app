import { useProfile } from './useProfile.js'
import stylesLayout from '../../Layout.module.scss'
import styles from './Profile.module.scss'
import cn from 'clsx'
import Header from '../../header/Header.jsx'
import Loader from '../../../UI/Loader.jsx'


const Profile = () => {
	const {data, isLoading} = useProfile()
	return (
		<>
	<div
		className={cn(stylesLayout.wrapper, stylesLayout.wrapper_otherPage)}
		style={{backgroundImage: `url('/public/profile.jpg')`, height: 400}} >
		<Header />

		<div className={styles.center}>
			{isLoading ? ( <Loader />
				) : (
				<>
				<img src='/public/user.svg' alt='Profile' height='72' color="#ff" draggable={false} />
				<h1 className={stylesLayout.heading}>{data?.email}</h1>
				</>
				)}
			<div className='wrapper_inner_page' style={{paddingLeft: 0, paddingRight: 0}}>

		</div>
	</div>


			</div>
			</>

)
}
export default Profile
