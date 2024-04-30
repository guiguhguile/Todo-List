import connectToDatabase from "@/lib/db";
import { Todo } from "@/models/todo";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params;
  const { newName: name } = await request.json();
  await connectToDatabase();

  const todo = await Todo.findByIdAndUpdate(id, { name });

  return NextResponse.json(todo);
}

export async function DELETE(request: NextRequest, { params }: any) {
  const { id } = params;

  await connectToDatabase();

  await Todo.findByIdAndDelete(id);

  return NextResponse.json({ message: "todo deleted" }, { status: 200 });
}
