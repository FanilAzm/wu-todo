import React from 'react';
import dayjs from 'dayjs';
import FileIcon from '../../assets/images/fileSave.svg';

const Browsing = ({item, editTodo, setModal, setInitialModal}) => {
	return (
		<div>
			<div className="browsingBlock">
				<div>Наименование задачи:</div>
				<div className="browsingContent">{item.title}</div>
			</div>
			<div className="browsingBlock">
				<div>Описание задачи:</div>
				<div className="browsingContent">{item.description}</div>
			</div>
			<div className="browsingBlock">
				<div>Сроки исполнения:</div>
				<div className="browsingContent">{ dayjs(item.date).format("DD MMMM YYYY") }</div>
			</div>
			<div className="browsingBlock">
				<img className="actionItemFile" src={FileIcon} alt="file"/>
				<div className="browsingContent">{item.file.length && item.file[0].name}</div>
			</div>
			<button
				className="editTodoBtn"
				onClick={() => {
					setModal(true);
					setInitialModal('edit');
				}}
			>Изменить</button>
			<button
				className="deleteTodoBtn"
				onClick={() => {
					setModal(true);
					setInitialModal('delete');
				}}
			>
				Удалить
			</button>
		</div>
	)
}

export default Browsing;