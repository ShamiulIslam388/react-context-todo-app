import React,{useContext} from 'react';
import { CounterContext } from './contexts/TodoContext';

const Count=()=>{
  const {count}=useContext(CounterContext)
  return(
    <h1>{`Count: ${count}`}</h1>
  )
}

export default Count;