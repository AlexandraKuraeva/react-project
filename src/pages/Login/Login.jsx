import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ErrorText from '../../components/ErrorText/ErrorText'
import MyButton from '../../components/UI/button/MyButton'
import useAuth from '../../hooks/useAuth'
import styles from './Login.module.css'

import cx from 'classnames'

function Authorization() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm()
	console.log(errors.seed)
	const navigate = useNavigate()

	const { isAuthenticated, setAuth, seedEntry, setSeedEntry } = useAuth()

	const onSubmit = data => {
		if (data.seed) {
			navigate('/users')
			sessionStorage.setItem('isAuthent', 'true')
			setSeedEntry(data.seed)
			sessionStorage.setItem('currentSeed', data.seed)
		}
	}

	return (
		<div className={styles.authorization}>
			<div className={styles.wrapper}>
				<div className={styles.body}>
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
						<h1 className={styles.title}>Добро пожаловать</h1>
						<label className={styles.label}>Seed</label>
						<input
							{...register('seed', { required: true })}
							className={cx('input', errors.seed && 'error')}
							type='text'
						/>

						{errors.seed && <ErrorText>*Поле обязательно</ErrorText>}
						<MyButton type='submit'>Submit</MyButton>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Authorization
