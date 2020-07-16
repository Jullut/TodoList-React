import React, { useContext } from 'react';
import './style.css';
import FilterDate from '../../todo/FilterDate';

const Sidebar = () => {
	return (
		<div className="sidebar-style">
			<h1>Features: </h1>
			<FilterDate />
		</div>
	);
};

export default Sidebar;
