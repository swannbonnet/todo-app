import React, { useState } from 'react';
import './Todo.css';

import {useDispatch} from 'react-redux';
import {saveTodo} from '../../redux/reducer';

export default function Todo() {

    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch(saveTodo({
            item: todo,
            done: false,
            id: Date.now(),
        }))
        setTodo('');
    }

    return (
        <div className="input_container">
            <input className="input_todo" type='text' value={todo} onChange={e => setTodo(e.target.value)}/>
            <button className='add_todo' onClick={addTodo}>Add ToDo</button>
        </div>
    )
}
