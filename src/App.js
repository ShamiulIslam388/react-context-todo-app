import "./styles.css";
import Nav from './Nav';
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Count from './Count'
import CountButton from './CountButton'
import {TodoProvider,CounterProvider} from './contexts/TodoContext'

export default function App() {
  return (
    <TodoProvider className="App">
      <CounterProvider>
        <Nav/>
        <TodoList/>
        <TodoForm/>
        <hr/>
        <br/>
        <Count/>
        <CountButton/>
      </CounterProvider>
    </TodoProvider>
  );
}
