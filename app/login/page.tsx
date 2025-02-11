"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()

  const handleLogin = (provider: string) => {
    signIn(provider, { callbackUrl: "/dashboard" })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6">Login</h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleLogin("google")}
            className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Login with Google</span>
          </button>
          <button
            onClick={() => handleLogin("github")}
            className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              loading="lazy"
              alt="github logo"
            />
            <span>Login with GitHub</span>
          </button>
        </div>
      </main>
    </div>
  )
}

