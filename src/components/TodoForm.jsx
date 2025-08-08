
import React, { useState,useEffect } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');


    //  This useEffect runs when props.edit changes
    useEffect(() => {
        if (props.edit) {
            setInput(props.edit.value);  // pre-fill input with existing todo text
        }
    }, [props.edit]);  // runs only when props.edit changes

    const handleChange = e => {
        setInput(e.target.value);                       /* set input state value */
    }

    const handleSubmit = e => {
        e.preventDefault();                         /* prevent from refreshing html page */
        props.onSubmit({                           /*calling  addTodo Function  */
            id: props.edit ? props.edit.id : Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');                                /* clear the input field */
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='add a todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
            />
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default TodoForm
