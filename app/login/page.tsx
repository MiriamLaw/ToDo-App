"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Invalid email or password")
      } else {
        router.push("/dashboard")
        router.refresh()
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6">Login</h1>

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
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
              autoComplete="new-password"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150"
            >
              Sign In
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </form>

        <div className="mt-4 space-y-2">
          <p>
            Don&apos;t have an account?{" "}
            <Link 
              href="/register" 
              className="text-blue-500 hover:text-blue-600"
            >
              Register
            </Link>
          </p>
          <p>
            Forgot your password?{" "}
            <Link 
              href="/reset-password" 
              className="text-blue-500 hover:text-blue-600"
            >
              Reset Password
            </Link>
          </p>
        </div>

        {/* Temporarily commented out OAuth buttons
        <div className="mt-8">
          <div className="flex items-center w-full max-w-md mb-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-4 text-gray-500">or</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            >
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
        */}
      </main>
    </div>
  )
}

