import { useState } from 'react'
import Layout from '../../Layout'
import { useForm } from 'react-hook-form'
import Button from '../../../UI/Button/Button'
import Field from '../../../UI/field/Field'

const Auth = () => {
	const onSubmit = data => {
		console.log(data)
	}

	const { register, handleSubmit, errors } = useForm({
		mode: 'onChange'
	})

	return (
		<Layout heading="Пожалуйста авторизируйтесь" bgImage="/public/auth.jpeg">
			<div className="wrapper_inner_page">
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name="email"
						register={register}
						options={{ required: 'Такой email не существует' }}
						type="text"
						placeholder="Введите ваш Email"
					/>
					<Button>Войти</Button>
				</form>
			</div>
		</Layout>
	)
}
export default Auth
