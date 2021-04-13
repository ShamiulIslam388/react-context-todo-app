import React,{useContext} from 'react';
import Todo from './Todo'

import {TodoContext} from './contexts/TodoContext'

const TodoList=()=> {
  const [todos,setTodos] = useContext(TodoContext)
  return(
    <div className="todo-container">
        {
          todos.map((todo,index) => (<Todo title={todo.title} key={todo.index}/>))
        }
    </div>
  )
}

export default TodoList;