import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute.jsx'
import Authorization from '../pages/Login/Login.jsx'
import Main from '../pages/Main.jsx'

export const useRoutes = () => {
	return (
		<Routes>
			<Route index element={<Authorization />} />
			<Route path='/' element={<Authorization />} />

			<Route element={<PrivateRoute />}>
				<Route path='/users' element={<Main />} />
				<Route
					path='*'
					element={
						<div
							style={{ textAlign: 'center', fontSize: '30px', color: 'red' }}
						>
							Такой страницы не существует(
						</div>
					}
				/>
			</Route>
		</Routes>
	)
}

export default useRoutes
