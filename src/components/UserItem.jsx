import React from 'react'
import MyButton from './UI/button/MyButton'

function UserItem({ user, number, remove }) {
	return (
		<div>
			<li>
				<strong>
					{number}. {user.name.first} {user.name.last}
				</strong>{' '}
				<br />
				{user.email}
				{user.edit && (
					<MyButton onClick={() => remove(user.id.value)}>Удалить</MyButton>
				)}
				{!user.edit && (
					<MyButton disabled onClick={() => remove(user.id.value)}>
						Удалить
					</MyButton>
				)}
			</li>
		</div>
	)
}

export default UserItem
