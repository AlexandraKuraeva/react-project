import React from 'react'
import UserItem from './UserItem'

function UserList({ users, remove }) {
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Users List</h1>
			<ul>
				{users.map((user, index) => (
					<UserItem
						number={index + 1}
						key={user.id.value}
						user={user}
						remove={remove}
					/>
				))}
			</ul>
		</>
	)
}

export default UserList
