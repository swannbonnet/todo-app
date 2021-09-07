import React from 'react';
import './App.css';

import { useSelector } from 'react-redux';
import { selectTodoList } from './redux/reducer';

import Todo from './components/todo/Todo';
import TodoItem from './components/todoItem/TodoItem';

function App() {

  const todoList = useSelector(selectTodoList);

  return (

    <div className="app">
      <div className="app_container">
       
        <div className="todo_container">
          <h1 className='todo_title'>Todo App</h1>
          {
            todoList.map(todo => <TodoItem  item={todo.item} done={todo.done} id={todo.id}/>)
          }
        </div>

        <Todo />

      </div>
    </div>
  );
}

export default App;
