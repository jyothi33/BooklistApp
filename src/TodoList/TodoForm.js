import React, { useState } from 'react'
import TodoListPrint from './TodoListPrint';

const TodoForm = () => {

    const [item, setItem] = useState();

    const [todoList, setTodoList] = useState([]);

    const onChangeHandler = (e) => {
        setItem(e.target.value)
    }

    const addTodo = (e) => {
        e.preventDefault();
        setTodoList([...todoList, {item: item, key:Date.now()}]);
        setItem("");
    }


    const editTodo = (key, editText) => {


       const editedTodoList =  todoList.map ( todo => {
            if(todo.key === key){
                todo.item = editText
            }
            return todo;
        })
        
        setTodoList(editedTodoList)

    }

    return (
        <>
            <form>
            <input type="text" value={item} onChange={onChangeHandler}/>
            <button onClick={addTodo}>+</button>
            </form>
            

            <TodoListPrint todoList={todoList} setTodoList={setTodoList} editTodo={editTodo}/>
        </>
    )
}

export default TodoForm
