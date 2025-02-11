import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to the Todo App</h1>
        <div className="flex mt-6">
          <Link
            href="/login"
            className="mx-4 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="mx-4 px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
          >
            Register
          </Link>
        </div>
      </main>
    </div>
  )
}

