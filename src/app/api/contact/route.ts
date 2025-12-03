import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"


export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Store message in database
    await prisma.message.create({
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving message:", error)
    return NextResponse.json(
      { success: false, error: "Failed to save message" },
      { status: 500 }
    )
  }
}

