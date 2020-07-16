import React, { useContext, useState } from 'react';
import './style.css';
import { TodosContext } from '../../contexts/TodosContext';

const FilterDate = () => {
	const { filterDate } = useContext(TodosContext);
	const [ date, setDate ] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		filterDate(date);
		setDate('');
	};

	return (
		<div>
			<p>Filter by date:</p>
			<form onSubmit={handleSubmit} className="form-style-filter">
				<input
					className="input-style-filter"
					type="date"
					placeholder="By which date should we filter?"
					value={date}
					onChange={(e) => setDate(e.target.value)}
					required
				/>
				<input className="form_btn-style-filter" type="submit" value="Filter" />
			</form>
		</div>
	);
};

export default FilterDate;
