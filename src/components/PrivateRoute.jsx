import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRoute = () => {
	const isAuthent = sessionStorage.getItem('isAuthent') || 'false'
	const location = useLocation()

	return isAuthent === 'true' ? (
		<Outlet />
	) : (
		<Navigate to='/' state={{ from: location }} replace />
	)
}

export default PrivateRoute
