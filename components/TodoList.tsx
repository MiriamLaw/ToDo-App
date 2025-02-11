import type React from "react"

interface Todo {
  id: string
  title: string
  completed: boolean
}

interface TodoListProps {
  todos: Todo[]
  updateTodo: (id: string, completed: boolean) => void
  deleteTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <ul className="w-full max-w-md">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => updateTodo(todo.id, !todo.completed)}
              className="mr-2"
            />
            <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
          </div>
          <button onClick={() => deleteTodo(todo.id)} className="px-2 py-1 text-red-600 hover:text-red-800">
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList

