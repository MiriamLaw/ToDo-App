"use client"

import type React from "react"
import { useState } from "react"

interface TodoFormProps {
  addTodo: (title: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      addTodo(title.trim())
      setTitle("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 w-full max-w-md">
      <div className="flex">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm

