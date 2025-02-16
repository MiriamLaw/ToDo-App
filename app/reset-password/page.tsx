"use client"

import { useState } from "react"
import Link from "next/link"

export default function ResetPassword() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")

    // TODO: Implement password reset functionality
    setMessage("If an account exists with this email, you will receive password reset instructions.")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Reset Password</h1>

        <form onSubmit={handleSubmit} className="w-full max-w-md" autoComplete="off">
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
              autoComplete="new-email"
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150"
            >
              Send Reset Instructions
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {message && <p className="text-green-500">{message}</p>}
          </div>
        </form>

        <p className="mt-4">
          Remember your password?{" "}
          <Link 
            href="/login" 
            className="text-blue-500 hover:text-blue-600"
          >
            Login
          </Link>
        </p>
      </main>
    </div>
  )
} 