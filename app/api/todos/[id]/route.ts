import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import prisma from "@/lib/prisma"

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession()

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { completed } = await request.json()
  const { id } = params

  const todo = await prisma.todo.update({
    where: { id },
    data: { completed },
  })

  return NextResponse.json(todo)
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession()

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = params

  await prisma.todo.delete({
    where: { id },
  })

  return NextResponse.json({ message: "Todo deleted successfully" })
}

