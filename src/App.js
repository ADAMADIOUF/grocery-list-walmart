import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filters from './components/Filters'
const exampleTodos = [
  {
    id: 1,
    description: 'Buy groceries',
    completed: false,
  },
  {
    id: 2,
    description: 'Walk the dog',
    completed: true,
  },
  {
    id: 3,
    description: 'Finish React project',
    completed: false,
  },
  {
    id: 4,
    description: 'Call mom',
    completed: true,
  },
]

const App = () => {
  const[todos,setTodos]=useState([])
  const [filter, setFilter] = useState("all")
useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem('todos'))
  if (savedTodos) {
    setTodos(savedTodos)
  }
}, [])
useEffect(()=>{
localStorage.setItem('todos', JSON.stringify(todos))
},[todos])
const addTodo = (todo) => {
  setTodos([...todos, todo])
}
const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  )
}

const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id))
}

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'completed':
      return todos.filter((todo) => todo.completed)
    case 'incomplete':
      return todos.filter((todo) => !todo.completed)
    default:
      return todos
  }
}

  return (
    <div>
      <h3>Todo List</h3>
      <TodoForm addTodo={addTodo} />
      <Filters setFilter={setFilter} />
      <TodoList
        todos={filterTodos(todos, filter)}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App
