import connectToDatabase from "@/lib/db";
import { Todo } from "@/models/todo";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const todos = await Todo.find();
  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  const { name } = await request.json();
  await connectToDatabase();

  await Todo.create({
    name,
  });

  return NextResponse.json(
    { message: "todo has been created" },
    { status: 201 }
  );
}
