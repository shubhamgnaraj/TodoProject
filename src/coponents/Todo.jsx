import React, { useState } from 'react'
import { useTodo } from '../context'

const Todo = () => {
    const [todo, setTodo] = useState()
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (todo ) {
            addTodo({todo, checked: false})
            setTodo('')
        } else {
            alert('plase enter a todo and then add ')
        }
    }

    return (
        <form className=' w-full  flex ' onSubmit={add}>
            <div className=' w-full m-[2vh] flex '>
            <input type="text" className='w-[90%] p-2 border-radius outline-none border-none'
            placeholder='Enter your todo'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}/>
            <button type='submit' className='text-white add-button bg-green-600'>Add</button>
            </div>
        </form>
    )
}

export default Todo;