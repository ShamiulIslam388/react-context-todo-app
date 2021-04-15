import React,{createContext,useState} from 'react';

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

export const CounterContext = createContext();
export const CounterProvider=(props)=>{
  const [count,setCount]=useState(0)
  return(
    <CounterContext.Provider value={{count,setCount}}>
      {props.children}
    </CounterContext.Provider>
  )
}