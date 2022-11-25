import React from 'react';

const Alert = ({item, removeTodo, setModal}) => {
	return (
		<div>
			<div>Вы действительно хотите удалить эту задачу?</div>
			<button onClick={() => setModal(false)} className="editTodoBtn">Отмена</button>
			<button
				className="deleteTodoBtn"
				onClick={() => {
					removeTodo(item.id);
					setModal(false);
				}}
			>
				Удалить
			</button>
		</div>
	)
}

export default Alert;