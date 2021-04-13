import "./styles.css";
import Nav from './Nav';
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import {TodoProvider} from './contexts/TodoContext'

export default function App() {
  return (
    <TodoProvider className="App">
      <Nav/>
      <TodoList/>
      <TodoForm/>
    </TodoProvider>
  );
}
