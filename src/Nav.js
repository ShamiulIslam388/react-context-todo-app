import React,{useContext} from 'react';

import {TodoContext} from './contexts/TodoContext';

const Nav =()=>{
  const [todos,setTodos] = useContext(TodoContext);
return(
  <div className="nav-container">
  <h1>Todo</h1>
  <h4>Numbers of Todos: {todos.length}</h4>
  </div>
)
}

export default Nav;