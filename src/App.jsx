import React, { useState } from 'react'
import { generalStyle } from './styles'
import { Plus } from 'lucide-react'
import Modal from './components/Modal.jsx'
import Task from './components/Task.jsx'

export default function App() {
	const [visibleModal, setVisibleModal] = useState(false)
	const [tasks, setTasks] = useState([])
	const [taskToEdit, setTaskToEdit] = useState(null)
	const visibleHandler = () => setVisibleModal(!visibleModal)

	const createTask = (task) => {
		setTasks([...tasks, { text: task, key: tasks.length }])
		visibleHandler()
	}

	const updateTask = (key, updatedText) => {
		const updatedTasks = tasks.map((task) => (task.key === key ? { ...task, text: updatedText } : task))
		setTasks(updatedTasks)
		setTaskToEdit(null)
		visibleHandler()
	}

	const editTask = (key) => {
		const taskToEdit = tasks.find((task) => task.key === key)
		setTaskToEdit(taskToEdit)
		visibleHandler()
	}

	const deleteTask = (key) => {
		const updatedTasks = tasks.filter((task) => task.key !== key)
		setTasks(updatedTasks)
	}

	if (visibleModal) return <Modal hideModal={visibleHandler} createTask={createTask} updateTask={updateTask} taskToEdit={taskToEdit} />

	return (
		<div className={generalStyle.mainBackground}>
			<div className={generalStyle.container}>
				<header className={generalStyle.header.container}>
					<h1 className={generalStyle.header.title}>Todo App</h1>
					<div className={generalStyle.header.icon} onClick={visibleHandler}>
						<Plus />
					</div>
				</header>
				<main>
					{tasks.length === 0 ? "No tasks... 😒" : tasks.map((item) => (<Task key={item.key} value={item.text} editTask={() => editTask(item.key)} deleteTask={() => deleteTask(item.key)} />))}
				</main>
			</div>
		</div>
	)
}
