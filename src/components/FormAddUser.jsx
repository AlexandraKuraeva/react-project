import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

export default function AddUser({ create }) {
	const [user, setUser] = useState({
		name: {
			first: '',
			last: '',
		},
		email: '',
		edit: true,
	})

	const handleAddUser = e => {
		e.preventDefault()
		create({
			...user,
			id: {
				value: Date.now(),
			},
		})
		console.log('user', user)

		setUser({ name: { first: '', last: '' }, email: '', edit: true })
	}
	const createUser = newUser => {
		const updatedUsers = [newUser, ...users]
		setUsers(updatedUsers)

		updateSessionStorage(updatedUsers)
	}

	return (
		<div>
			<h2>Add User</h2>
			<form action=''>
				{' '}
				<MyInput
					type='text'
					name='name.first'
					placeholder='Имя'
					value={user.name.first}
					onChange={e =>
						setUser({ ...user, name: { ...user.name, first: e.target.value } })
					}
				/>
				<MyInput
					type='text'
					name='name.last'
					placeholder='Фамилия'
					value={user.name.last}
					onChange={e =>
						setUser({ ...user, name: { ...user.name, last: e.target.value } })
					}
				/>
				<MyInput
					type='text'
					name='email'
					placeholder='email'
					value={user.email}
					onChange={e => setUser({ ...user, email: e.target.value })}
				/>
				<MyButton onClick={handleAddUser}>Добавить</MyButton>
			</form>
		</div>
	)
}
