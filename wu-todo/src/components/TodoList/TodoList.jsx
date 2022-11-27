import React from "react";
import TodoItem from '../TodoItem/TodoItem';
import AddIcon from '../../assets/images/add.svg';

const TodoList = ({todos, setModal, setInitialModal, removeTodo, setViewTodo, timeWatch}) => {
    return (
        <div className="todoList">
            <div className="todoListTitle">
                <h3>Список задач</h3>
                <img
                    className="actionItem"
                    src={AddIcon}
                    alt="add"
                    onClick={() => {
                        setModal(true);
                        setInitialModal('add');
                    }}
                />
            </div>
            {   todos.length
                ? todos.map((item, index) => {
                    return (
                        <TodoItem
                            key={index}
                            item={item}
                            removeTodo={removeTodo}
                            setViewTodo={setViewTodo}
                            setModal={setModal}
                            setInitialModal={setInitialModal}
                            timeWatch={timeWatch}
                        />
                    )
                })
                : <div className="notTodoText">Задач пока нет</div>
            }
        </div>
    )
}

export default TodoList;