import { useProfile } from './useProfile.js'
import stylesLayout from '../../Layout.module.scss'
import cn from 'clsx'


const Profile = () => {
	const {} = useProfile()
	return <div
		className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
		style={{ backroundImage: url("../../../../a"), height:356 }}>

		</div>
}
export default Profile
