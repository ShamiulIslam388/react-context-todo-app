import React,{createContext} from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos,setTodos] = React.useState([
    {id: 1, title: 'coding'},
    {id: 2, title: 'eating'},
    {id: 3, title: 'sleeping'}
  ])
  return(
    <TodoContext.Provider value={[todos,setTodos]}>
      {props.children}
    </TodoContext.Provider>
  )
}