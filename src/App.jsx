import useRoutes from './routes/routes.jsx'

import './App.scss'

export default function App() {
	const routes = useRoutes()
	return <>{routes}</>
}
