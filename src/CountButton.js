import React, { useContext } from 'react';
import { CounterContext } from './contexts/TodoContext';

const CountButton=()=>{
  const {count,setCount} = useContext(CounterContext)
  return(
    <React.Fragment>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </React.Fragment>
  )
}

export default CountButton;