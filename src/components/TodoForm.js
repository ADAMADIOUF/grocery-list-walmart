import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (description.trim()) {
      const newTodo = {
        id: Date.now(), // Unique ID for each todo
        description,
        completed: false,
      }
      addTodo(newTodo)
      setDescription('') // Clear the input field
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a new todo...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoForm
