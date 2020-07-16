import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';
import './style.css';

const Header = () => {
	const { todos } = useContext(TodosContext);
	return (
		<header className="header-style">
			<h1>Todo List</h1>
			<p>Currently you have {todos.length} tasks to finish</p>
		</header>
	);
};

export default Header;
