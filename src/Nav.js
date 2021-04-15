import React,{useContext} from 'react';

import {CounterContext, TodoContext} from './contexts/TodoContext';

const Nav =()=>{
  const [todos,setTodos] = useContext(TodoContext);
  const {count} = useContext(CounterContext)
return(
  <div className="nav-container">
  <h1>Todo</h1>
  <h4>Numbers of Todos: <span className={`${todos.length > 0 ?'white-bold' : ''}`}>{todos.length}</span></h4>
  <h4>Count: <span className={`${count > 0 ?'white-bold' : ''}`}>{count}</span></h4>
  </div>
)
}

export default Nav;