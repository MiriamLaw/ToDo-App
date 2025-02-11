import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { getServerSession } from "next-auth/next"
import SessionProvider from "@/components/SessionProvider"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo app with authentication",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}



import './globals.css'