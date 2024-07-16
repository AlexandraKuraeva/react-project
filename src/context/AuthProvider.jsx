import { createContext, useState } from 'react'

const AuthContext = createContext({
	isAuthenticated: false,
	setAuth: () => {},
	seedEntry: '',
	setSeedEntry: () => {},
})

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setAuth] = useState(false)

	const [seedEntry, setSeedEntry] = useState('')

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, setAuth, seedEntry, setSeedEntry }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
