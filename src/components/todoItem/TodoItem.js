import React from 'react';
import './TodoItem.css';

import { useDispatch } from 'react-redux';
import { setCheck } from '../../redux/reducer';

export default function TodoItem({item, done, id}) {

    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className='todo_item'>
            <input type="checkbox"
                checked={done}
                onChange={handleCheck}/>
            <p className={done? "item_done" : "item"}>{item}</p>
        </div>
    )
}
