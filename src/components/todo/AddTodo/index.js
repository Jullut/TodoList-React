import React, { useContext, useState } from 'react';
import './style.css';
import { TodosContext } from '../../contexts/TodosContext';

const AddTodo = () => {
	const { addTodo } = useContext(TodosContext);
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(title,date);
		setTitle('');
		setDate('');
	}

	return ( 
		<form onSubmit={handleSubmit} className="form-style">
			<input className="input-style" type="text" placeholder="Add new task to your list..." value={title} 
			onChange={(e) => setTitle(e.target.value)} required/>
			<input className="input-style" type="date" placeholder="Whenever you are ready..." value={date} 
			onChange={(e) => setDate(e.target.value)} required/>
			<input className="form_btn-style" type="submit" value="Add Todo"/>
		</form>
	 );
}
 
export default AddTodo;
