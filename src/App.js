import React from 'react';
import './App.css';
import Header from './components/layout/Header/index';
import Sidebar from './components/layout/Sidebar/index';
import TodoList from './components/todo/TodoList/index';
import AddTodo from './components/todo/AddTodo/index';
import TodosContextProvider from './components/contexts/TodosContext';

function App() {
	return (
		<div className="App">
			<TodosContextProvider>
				<div className="sidebar-container">
					<Sidebar />
				</div>
				<div className="main-container">
					<Header />
					<AddTodo />
					<TodoList />
				</div>
			</TodosContextProvider>
		</div>
	);
}

export default App;
