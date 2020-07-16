import React, { useContext } from 'react';
import './style.css';
import { TodosContext } from '../../contexts/TodosContext';

const TodoItem = ({ todo }) => {
	const { delTodo, markComplete } = useContext(TodosContext);

	return ( 
		<div className="item-style" style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
			<p>
				<input type="checkbox" onChange={() => markComplete(todo.id)}/>
				{todo.title}
				<button onClick={() => delTodo(todo.id)} className="btn-style"> x </button>
			</p>
			<p className="item-date">
				{todo.date}
			</p>
		</div>
	 );
}
 
export default TodoItem;
