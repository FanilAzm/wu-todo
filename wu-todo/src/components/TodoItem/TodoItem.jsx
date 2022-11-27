import React, {useEffect} from "react";
import dayjs from 'dayjs';
import DeleteIcon from '../../assets/images/delete.svg';

const TodoItem = ({item, setViewTodo, setModal, setInitialModal, timeWatch}) => {

    useEffect(() => {
        timeWatch(item.id);
    }, [item])

    return (
        <div className={item.success ? 'todoItem active' : 'todoItem'}>
            <div
                className="todoItemContent"
                onClick={() => {
                    setModal(true);
                    setInitialModal('view');
                    setViewTodo(item);
                }}
            >
                <div className="todoItemTitle">
                    <div>{item.title}</div>
                    <div className={item.delay ? 'todoItemDate delay' : 'todoItemDate'}>
                        { dayjs(item.date).format("DD MMMM YYYY") }
                    </div>
                </div>
                <div className="todoItemDescr">{item.description}</div>
            </div>
            <img
                className="actionItem actionItemDelete"
                src={DeleteIcon}
                alt="delete"
                onClick={() => {
                    setModal(true);
                    setInitialModal('delete');
                    setViewTodo(item);
                }}
            />
        </div>
    )
}

export default TodoItem;