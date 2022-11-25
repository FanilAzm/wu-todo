import React, {useState} from 'react';

const Form = ({addTodo}) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	const fileInput = React.createRef();

	const submitHandler = event => {
		event.preventDefault();
		addTodo({
			id: Date.now(),
			title,
			description,
			date,
			delay: false,
			file: fileInput.current.files
		});
	}

	const disableDates = () => {
		const today = new Date();
		const dd = today.getDate() + 1;
		const mm = today.getMonth() + 1;
		const yyyy = today.getFullYear();

		return yyyy + '-' + mm + '-' + dd;
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="formGroup">
				<label>Наименование задачи</label>
				<input
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
					required
				/>
			</div>
			<div className="formGroup">
				<label>Описание задачи</label>
				<textarea
					type="text"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</div>
			<div className="formGroup">
				<label>Сроки исполнения</label>
				<input
					type="date"
					value={date}
					onChange={e => setDate(e.target.value)}
					min={disableDates()}
					required
				/>
			</div>
			<div className="formAction">
				<input className="addFile" type="file" ref={fileInput} />
			</div>
			<button className="addTodoBtn" type="submit">Добавить</button>
		</form>
	)
}

export default Form;