import React from "react";
import dayjs from 'dayjs';
import DeleteIcon from '../../assets/images/delete.svg';

const TodoItem = ({item, setViewTodo, setModal, setInitialModal}) => {
    return (
        <div className="todoItem">
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
                    <div className="todoItemDate">
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