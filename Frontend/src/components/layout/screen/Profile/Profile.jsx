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
		</div>
	</div>
			<div className={styles.before_after}>
				<div>
					<div className={styles.heading}>До</div>
					<img src='/public/Before.jpg' alt='Before' height='200' draggable='false'/>
				</div>
				<div>
					<div className={styles.heading}>После</div>
					<img src='/public/after.jpg' alt='After' height='200' draggable='false'/>
				</div>
			</div>
			</>

)
}
export default Profile
