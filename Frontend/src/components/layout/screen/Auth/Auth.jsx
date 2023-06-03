import { useState } from 'react'
import Layout from '../../Layout'
import { useForm } from 'react-hook-form'
import Button from '../../../UI/Button/Button'
import Field from '../../../UI/field/Field'
import Loader from '../../../UI/Loader'
import styles from './Auth.module.scss'

const isLoading = false
const isLoadingAuth = false

const Auth = () => {
	const onSubmit = data => {
		console.log(data)
	}
	const [type, setType] = useState('auth')

	const { register, handleSubmit, errors } = useForm({
		mode: 'onChange'
	})

	return (
		<Layout
			heading="Пожалуйста авторизируйтесь"
			bgImage={'../../../../../public/auth.jpeg'}
		>
			<div className="wrapper_inner_page">
				{(isLoading || isLoadingAuth) && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name="email"
						register={register}
						options={{ required: 'Такой email не существует' }}
						type="text"
						placeholder="Введите ваш Email"
					/>
					<Field
						error={errors?.password?.message}
						name="password"
						register={register}
						options={{ required: 'Неверный пароль' }}
						type="password"
						placeholder="Введите ваш пароль"
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('reg')}>
							Зарегистрироваться
						</Button>
						<Button clickHandler={() => setType('auth')}>Войти</Button>
					</div>
				</form>
			</div>
		</Layout>
	)
}
export default Auth
