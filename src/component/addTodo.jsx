import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice';

const AddTodo = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch();

    const handleTodo = () => {

        if (text.trim()) {
            dispatch(addTodo(text))
            setText("")
        }
    }
    return (
        <div>
            <input type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='enter the text'
            >
            </input>
            <button onClick={handleTodo}> AddTodo</button>
        </div>
    )
}

export default AddTodo