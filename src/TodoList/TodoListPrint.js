import React, { useState } from 'react'

const TodoListPrint = ({todoList, setTodoList, editTodo}) => {


    //const [editState, setEditState] = useState(false);


    const [editId, setEditId] = useState();

    const [editText, setEditText] = useState();

    const deleteHandler = key => {
        const newTodoList = todoList.filter( todo => todo.key != key )
        setTodoList(newTodoList);
    }

    const editHandler = key => {
        //setEditState(true);
        setEditId(key)
    }

    const editChangeHandler = (e) => {
        setEditText(e.target.value)  
    }

    const saveHandler = key => { 
        editTodo(key, editText)
        setEditId();
        setEditText("");
    }

    return (
        <div >
            {todoList.map( todo => 
            <div key={todo.key} className='todoInput'>
                {/*!editState*/ editId !== todo.key ? <h3>{todo.item}</h3> : <><input value={editText} onChange={(e) => editChangeHandler(e, todo.key)}></input><button onClick={ () => saveHandler(todo.key)}> Save </button></>}
                <button onClick={ () => deleteHandler(todo.key)}> X </button>
                <button onClick={ () => editHandler(todo.key)}> Edit </button>
            </div>)}
        </div>
    )
}

export default TodoListPrint
