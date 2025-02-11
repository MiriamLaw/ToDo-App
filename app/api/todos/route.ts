import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import prisma from "@/lib/prisma"

export async function GET() {
  const session = await getServerSession()

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const todos = await prisma.todo.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return NextResponse.json(todos)
}

export async function POST(request: Request) {
  const session = await getServerSession()

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { title } = await request.json()

  const todo = await prisma.todo.create({
    data: {
      title,
      userId: session.user.id,
    },
  })

  return NextResponse.json(todo)
}

