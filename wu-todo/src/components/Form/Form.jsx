import React, {useState, useEffect} from 'react';

const Form = ({addTodo, editMode = false, item, editTodo, setModal}) => {
	const [title, setTitle] = useState(editMode ? item.title : '');
	const [description, setDescription] = useState(editMode ? item.description : '');
	const [date, setDate] = useState(editMode ? item.date : '');
	const [checked, setChecked] = useState(editMode ? item.success : false);
	const fileInput = React.createRef();

	useEffect(() => {
		if(item) {
			const file = new File(['info'], `${item.file.length ? item.file[0].name : ''}`, {type: 'text/plain'});
			const dataTransfer = new DataTransfer(file);
			dataTransfer.items.add(file);
			fileInput.current.files = dataTransfer.files;
		}
	}, [item])

	const submitHandler = event => {
		event.preventDefault();
		addTodo({
			id: Date.now(),
			title,
			description,
			date,
			delay: false,
			file: fileInput.current.files,
			success: checked
		});
	}

	const submitEditHandler = event => {
		event.preventDefault();
		editTodo({
			id: item.id,
			title,
			description,
			date,
			file: fileInput.current.files,
			success: checked
		});
		setModal(false);
	}

	const disableDates = () => {
		const today = new Date();
		const dd = today.getDate() + 1;
		const mm = today.getMonth() + 1;
		const yyyy = today.getFullYear();

		return yyyy + '-' + mm + '-' + dd;
	}

	return (
		<form onSubmit={editMode ? submitEditHandler : submitHandler}>
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
			{
				editMode && (
					<div className="checkbox-wrapper">
						<label htmlFor="checkbox">
							<input id="checkbox" type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
							<span>Задача выполнена?</span>
						</label>
					</div>
				)
			}
			<div className="formAction">
				<input className="addFile" type="file" ref={fileInput} accept="audio/*,video/*,image/*,.doc,.docx,application/msword" />
			</div>
			<button className="addTodoBtn" type="submit">{editMode ? 'Сохранить' : 'Добавить'}</button>
		</form>
	)
}

export default Form;