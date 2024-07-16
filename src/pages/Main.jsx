import React, { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import EndMsg from '../components/EndMsg'
import FormAddUser from '../components/FormAddUser'
import Header from '../components/Header/Header'
import MyButton from '../components/UI/button/MyButton'
import UserList from '../components/UserList'
import Modal from '../components/modal/Modal'

function Main() {
	const [users, setUsers] = useState([])
	const [page, setPage] = useState(1)
	const [limit, setLimit] = useState(40)
	const [hasMore, setHasMore] = useState(true)
	const isLoading = useRef(false)

	const [isVisible, setIsVisible] = useState(false)
	const [isTOVisible, setIsTOVisible] = useState(false)

	const max = 100

	const currentSeed = sessionStorage.getItem('currentSeed')

	const fetchUsers = async () => {
		if (hasMore && !isLoading.current) {
			isLoading.current = true

			try {
				const response = await fetch(
					`https://randomuser.me/api/?seed=${currentSeed}&inc=id,gender,name,email&results=${limit}&nat=us&page=${page}&format=json`
				)
				const data = await response.json()
				setUsers(prevUsers => [...prevUsers, ...data.results])
				setPage(prevPage => prevPage + 1)
				if (users.length >= max) {
					setHasMore(false)
				}
			} catch (error) {
				console.error('Error fetching users:', error)
			} finally {
				isLoading.current = false
			}
		}
	}

	useEffect(() => {
		const items = JSON.parse(sessionStorage.getItem('users'))
		if (items && items.length !== 0) {
			console.log(items)
			setUsers(items)
		} else {
			fetchUsers()
		}
	}, [])

	const updateSessionStorage = newUsers => {
		sessionStorage.setItem('users', JSON.stringify(newUsers))
	}

	const createUser = newUser => {
		const updatedUsers = [newUser, ...users]
		setUsers(updatedUsers)

		updateSessionStorage(updatedUsers)
	}

	const removeUser = id => {
		const updatedUsers = users.filter(user => user.id.value !== id)
		setUsers(updatedUsers)
		updateSessionStorage(updatedUsers)
	}

	return (
		<>
			<Header />

			<Modal
				isVisible={isVisible}
				onClose={() => setIsVisible(false)}
				className='custom-modal'
			>
				<MyButton onClick={() => setIsTOVisible(true)}>Вложенное окно</MyButton>
				<Modal
					isVisible={isTOVisible}
					onClose={() => setIsTOVisible(false)}
					className='blue'
				>
					{' '}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
					tempora perspiciatis dignissimos voluptatum aliquid optio ducimus nemo
					voluptates molestias architecto sit atque il
				</Modal>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
				tempora perspiciatis dignissimos voluptatum aliquid optio ducimus nemo
				voluptates molestias architecto sit atque illum dolores vero vitae
				commodi aliquam rerum sunt quos, earum pariatur. Aperiam sequi
				voluptatem reiciendis natus nisi nobis, fuga animi esse, reprehenderit
				quae porro quasi dolorem. Iste alias reprehenderit, ipsum, voluptate
				fugit, quos laborum iure sequi laudantium beatae cum assumenda nihil?
				Sequi veritatis laudantium, sunt ipsam iste aspernatur nobis temporibus
				quae doloremque, soluta possimus at quibusdam repellat est? Assumenda
				magnam possimus incidunt provident sunt corrupti, nostrum cum repellat
				voluptas soluta aliquam ipsa pariatur totam aspernatur iste repudiandae
				quos id. Eveniet quasi perspiciatis voluptatem, nesciunt unde recusandae
				ducimus voluptatibus blanditiis, pariatur, saepe dolore placeat cum
				reiciendis voluptates laboriosam laudantium cupiditate! Distinctio
				soluta neque exercitationem quaerat ipsam nesciunt eius esse nam
				repellendus ut, voluptas quia ad voluptatem delectus, fugiat at aut
				autem animi quisquam magni? Debitis dolor voluptatibus vel unde
				molestias est reiciendis doloremque harum nobis quis incidunt
				voluptatum, error dicta quam, facilis quas ab, aspernatur exercitationem
				corporis hic? Ipsum necessitatibus ea mollitia quae unde eaque quo,
				neque totam, perferendis, debitis consequatur?
			</Modal>
			<MyButton onClick={() => setIsVisible(true)}>Modal</MyButton>
			<FormAddUser create={createUser} />

			<InfiniteScroll
				dataLength={users.length}
				next={fetchUsers}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}
				endMessage={<EndMsg />}
			>
				<UserList users={users} remove={removeUser} />
			</InfiniteScroll>
		</>
	)
}

export default Main
