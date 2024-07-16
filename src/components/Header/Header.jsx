import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import FormAddUser from '../FormAddUser'
import Modal from '../modal/Modal'
import MyButton from '../UI/button/MyButton'
import styles from './Header.module.scss'

function Header() {
	const [visibleModal, setVisibleModal] = useState(false)
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.left}>FIO</div>
					<div className={styles.right}>
						<MyButton onClick={() => setVisibleModal(true)}>
							Добавить пользователя
						</MyButton>
						<Modal
							isVisible={visibleModal}
							onClose={() => setVisibleModal(false)}
							className='custom-modal'
						>
							<FormAddUser />
						</Modal>

						<Link to='/'>
							<div
								className={styles.btn + ' ' + styles.btnLogout}
								onClick={() => sessionStorage.clear()}
							>
								Выйти
							</div>
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
