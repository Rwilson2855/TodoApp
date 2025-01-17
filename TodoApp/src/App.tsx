import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {completed: true, id: 1, title: "Completed to do, yay!", owner: "Me"}
    {completed: true, id: 1, title: "Incomplete to do, get to work!", owner: "You"}

  ]);
  const [sortBy, setSortBy] = useState("all")
  const addTodo = (title, owner) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      owner,
      completed: false,
    };
    setTodos([...todos, newTodo])
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div></div>
  )
}

export default App
