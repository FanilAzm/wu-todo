import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import ModalContent from './components/ModalContent/ModalContent';

function App() {
  const [todos, setTodos] = useState([{
    id: Date.now(),
    title: 'Разработать todo лист',
    description: 'Описание задачи',
    date: '2022-11-26',
    delay: false,
    file: null
  }]);
  const [modal, setModal] = useState(false);
  const [initialModal, setInitialModal] = useState('');
  const [viewTodo, setViewTodo] = useState(null);

  const addTodo = (todo) => {
    console.log(todo);
    setTodos([...todos, todo]);
    setModal(false);
  }  

  const removeTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  }

  const editTodo = (item) => {
    console.log(item);
  }

  return (
    <div className="app">
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        setViewTodo={setViewTodo}
        setModal={setModal}
        setInitialModal={setInitialModal}
      />
      <ModalContent
        modal={modal}
        setModal={setModal}
        initialModal={initialModal}
        setInitialModal={setInitialModal}
        addTodo={addTodo}
        viewTodo={viewTodo}
        editTodo={editTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
