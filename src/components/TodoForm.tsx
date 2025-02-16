import { ChangeEvent, FormEvent, useState } from 'react';

type TodoFormProps = {
	onAddTodo: (text: string) => void;
};

export default function TodoForm({ onAddTodo }: TodoFormProps) {
	const [text, setText] = useState('');

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		if (text.trim()) {
			onAddTodo(text);
			setText('');
		}
	};

	const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	return (
		<form className="flex gap-2" aria-label="Add new Task" onSubmit={handleSubmit}>
			<input
				className="border border-gray-400 p-2 rounded-sm focus:outline-none"
				type="text"
				value={text}
				onChange={handleChangeText}
				placeholder="add Task"
				aria-label="add Task"
			/>
			<button className="min-w-20 bg-blue-500 p-2 rounded-sm text-white cursor-pointer" type="submit">
				Add
			</button>
		</form>
	);
}
