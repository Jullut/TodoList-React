import React, { useContext } from 'react';
import TodoItem from '../TodoItem/index';
import './style.css';
import { TodosContext } from '../../contexts/TodosContext';

const TodoList = () => {
	const { todos } = useContext(TodosContext);
	return todos.length ? ( 
		<div className="todo-list">
			<h3>
				{ todos.map (todo => {
					return ( <TodoItem todo={todo} key={todo.id} /> )
				})}
			</h3>	
		</div>
	 ) : (
		<div className="list-empty"> <h3> Great job! You did everything you had to! </h3> </div>
	 );
}
 
export default TodoList;
