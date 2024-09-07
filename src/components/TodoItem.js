import React from 'react'

const TodoItem = ({
  id,
  description,
  completed,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {description}
      </span>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  )
}

export default TodoItem
