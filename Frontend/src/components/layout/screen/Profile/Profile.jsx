import { useProfile } from './useProfile.js'
import stylesLayout from '../../Layout.module.scss'
import cn from 'clsx'
import Header from "../../header/Header.jsx";


const Profile = () => {
	const {} = useProfile()
	return <div className={cn(stylesLayout.wrapper, stylesLayout.wrapper_otherPage)}
				style={{backgroundImage: `url('/public/bg.jpeg')`, height: 356}}>
		<Header />
	</div>
}
	export default Profile
