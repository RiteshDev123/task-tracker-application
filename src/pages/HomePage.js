import React from 'react'
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useSelector } from 'react-redux'

function HomePage() {
	const tasks = useSelector(state => state.tasks);

	return (
		<>
			<TaskForm />
			{tasks.length > 0 && <TaskList />}
		</>
	)
}

export default HomePage