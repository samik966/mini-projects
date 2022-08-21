import { Button } from 'components'
import { Component } from 'react'
import style from './Swipe.module.css'

export default class Swipe extends Component {
	state = {
		todos: [
			{ id: 1, task: 'Eat' },
			{ id: 2, task: 'Drink' },
			{ id: 3, task: 'Walk' },
			{ id: 4, task: 'Bath' },
			{ id: 5, task: 'Sleep' }
		]
	}

	swap = (src, dest) => {
		const newTodos = [...this.state.todos]
		const [deleted] = newTodos.splice(src, 1)
		newTodos.splice(dest, 0, deleted)
		this.setState({ todos: newTodos })
	}

	moveUp = (id) => {
		const destElIndex = id === 0 ? this.state.todos.length - 1 : id - 1
		this.swap(id, destElIndex)
	}
	moveDown = (id) => {
		const destElIndex = id === this.state.todos.length - 1 ? 0 : id + 1
		this.swap(id, destElIndex)
	}
	generateTodoList = () => {
		return this.state.todos.map((todo, idx) => {
			return (
				<li
					key={todo.id}
					className={style.swipeItem}
					style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
				>
					<span className={style.swipeTask}>{todo.task}</span>
					<div className={style.swipeActions}>
						<Button onClick={() => this.moveUp(idx)}>Up</Button>
						<Button onClick={() => this.moveDown(idx)}>Down</Button>
					</div>
				</li>
			)
		})
	}

	render() {
		return (
			<div className={style.swipeContainer}>
				<ul className={style.swipeList}>{this.generateTodoList()}</ul>
			</div>
		)
	}
}
