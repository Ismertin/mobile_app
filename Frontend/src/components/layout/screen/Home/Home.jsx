import { useState } from 'react'
import Layout from '../../Layout.jsx'
import { useNavigate } from 'react-router-dom'
import Button from '../../../UI/Button/Button.jsx'
import styles from './Home.module.scss'
import { useAuth } from '../../../../hooks/useAuth.js'
import Counter from '../../../UI/Counter/Counter.jsx'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	return (
		<Layout bgImage={'/public/bg.jpeg'}>
			<Button
				clickHandler={() => {
					!isAuth ? navigate('/auth') : navigate('/new-workout')
				}}
			>
				{!isAuth ? 'Войти' : 'Новая тренировка'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/**Couners */}
			<Counter />
		</Layout>
	)
}

export default Home
