import React, {useEffect} from 'react';
import dayjs from 'dayjs';
import FileIcon from '../../assets/images/fileSave.svg';

const Browsing = ({item, setModal, setInitialModal}) => {

	console.log(item.file);

	const url = item.file.length ? URL.createObjectURL(item.file[0]) : '';
	
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
				<div>Выполнение задачи:</div>
				<div className="browsingContent">{item.success ? 'Выполнено' : 'Не выполнено'}</div>
			</div>
			<div className="browsingBlock">
				<div>Просрок задачи:</div>
				<div className="browsingContent">{item.delay ? 'Просрочена' : 'Еще можно выполнить'}</div>
			</div>
			<div className="browsingBlock">
				<img className="actionItemFile" src={FileIcon} alt="file"/>
				<div className="browsingContent">
					{
						item.file.length
						? <a href={url} download>{item.file[0].name}</a>
						: 'Файлов нет'
					}
				</div>
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