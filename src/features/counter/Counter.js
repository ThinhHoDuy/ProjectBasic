import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { addTodoAction, delelteTodoAction } from "../todos/todosSlide"
import { useState } from "react";

export default function Counter() {
    const counter = useSelector(state => state.counter.value)
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    // console.log('todos:',todos)
    
    const handleOnchange = (e) => {
        setName(e.target.value)
    }
    const handleAddTodo = () => {
        dispatch(addTodoAction({
            name,
            id: Math.random()
        }))
        setName('')
    }
    const handleDeleteTodo = (id) => {
        dispatch(delelteTodoAction(id))
    }
    

    return (
        <div>
            <div>
                <button aria-label="Increment Value"
                    onClick={()=> dispatch(increment())}
                >
                    Increment
                </button>
                <span>{counter}</span>
                <button aria-label="Derement Value"
                        onClick={()=>dispatch(decrement())}
                >
                    Decrement
                </button>
                <div>
                    <input value={name} onChange={handleOnchange} />
                    <button onClick={handleAddTodo}>Add todo</button>
                </div>
                {todos.map((todo) => {
                    return (
                        <div key={todo.id}>
                            {todo.id} - {todo.name}
                            <span onClick={() => handleDeleteTodo(todo.id)}>  x</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}