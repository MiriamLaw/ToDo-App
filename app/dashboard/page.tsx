"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import TodoList from "@/components/TodoList"
import TodoForm from "@/components/TodoForm"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    } else if (status === "authenticated") {
      fetchTodos()
    }
  }, [status, router])

  const fetchTodos = async () => {
    const response = await fetch("/api/todos")
    const data = await response.json()
    setTodos(data)
  }

  const addTodo = async (title: string) => {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
    const newTodo = await response.json()
    setTodos([...todos, newTodo])
  }

  const updateTodo = async (id: string, completed: boolean) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    })
    const updatedTodo = await response.json()
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)))
  }

  const deleteTodo = async (id: string) => {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    })
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6">Dashboard</h1>
        <p className="mb-4">Welcome, {session?.user?.name}!</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        <button
          onClick={() => router.push("/api/auth/signout")}
          className="mt-4 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
        >
          Logout
        </button>
      </main>
    </div>
  )
}

