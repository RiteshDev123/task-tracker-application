import React, { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function HomePage() {
	const tasks = useSelector(state => state.tasks.tasks);
	const [isLoading, setisLoading] = useState(true);
	const user = useSelector(state => state.user)
	const navigate = useNavigate();

	useEffect(() => {
		if (Object.keys(user.user).length === 0) {
			navigate('/login')
		}

		setisLoading(false)
	}, [user])

	return (
		<>
			{isLoading ? <Spinner /> :
				(
					<>
						<TaskForm />
						{tasks.length > 0 && <TaskList />}
					</>
				)}

		</>
	)
}

export default HomePage