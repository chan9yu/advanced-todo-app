import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './components/TodoForm';
import type { Todo } from './models/todo.model';

export default function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = (text: string) => {
		const newTodo: Todo = {
			id: uuidv4(),
			text,
			completed: false
		};

		setTodos(prev => [...prev, newTodo]);
	};

	console.log('### Todo Test:', todos);

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
			<h1>Todo List</h1>
			<TodoForm onAddTodo={addTodo} />
		</div>
	);
}
