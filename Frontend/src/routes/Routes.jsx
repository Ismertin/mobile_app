import NotFound from '../components/layout/screen/not-found/NotFound.jsx'
import { routes } from './routes.data.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { useAuth } from '../hooks/useAuth.js'

const Router = () => {
	const { isAuth } = useAuth()
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.auth && !isAuth) {
						return false
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router