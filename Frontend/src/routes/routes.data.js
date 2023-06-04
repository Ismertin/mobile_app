import Auth from '../components/layout/screen/Auth/Auth'
import Home from '../components/layout/screen/Home/Home'
import NewWorkout from '../components/layout/screen/NewWorkout/NewWorkout.jsx'
import Profile from '../components/layout/screen/Profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		auth: false
	},
	{
		path: '/auth',
		component: Auth,
		auth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		auth: true
	},
	{
		path: '/profile',
		component: Profile,
		auth: false
	}
]
