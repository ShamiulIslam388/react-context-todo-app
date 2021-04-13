import React, { useState, useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useContext(TodoContext);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { title }]);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} />

      <button>Add</button>
      <button onClick={() => setTodos([])}>clear</button>
    </form>
  );
};

export default TodoForm;
