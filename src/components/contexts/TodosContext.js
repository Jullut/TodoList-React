import React, { useContext, useState, createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
	const [ todos, setTodos ] = useState([
		{
			id: uuid(),
			title: 'Take out the trash',
            date: '2020-07-15',
			completed: false
		},
		{
			id: uuid(),
			title: 'Feed the dog',
            date: '2020-07-15',
			completed: false
		},
		{
			id: uuid(),
			title: 'Dinner with friends',
            date: '2020-07-15',
			completed: false
		}
	]);

	const addTodo = (title, date) => {
		setTodos([
			...todos,
			{
				id: uuid(),
				title,
                date,
				completed: false
			}
		]);
	};

	const delTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const markComplete = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	};

	return (
		<TodosContext.Provider value={{ todos, addTodo, delTodo, markComplete }}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
