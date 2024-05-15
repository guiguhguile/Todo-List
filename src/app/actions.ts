"use server";

import { prisma } from "@/database";
import { z } from "zod";
import { todoSchema } from "./schema";

export async function getTodos() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return todos;
}

export async function createTodo(input: z.infer<typeof todoSchema>) {
  if (!input.title) {
    return {
      error: "title is required",
      data: null,
    };
  }

  const todo = await prisma.todo.create({
    data: {
      title: input.title,
    },
  });

  return todo;
}

export async function updateTodo(input: z.infer<typeof todoSchema>, id: any) {
  const updatedTodo = await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      title: input.title,
    },
  });

  return {
    error: null,
    data: updatedTodo,
  };
}

export async function deleteTodo(input: z.infer<typeof todoSchema>) {
  await prisma.todo.delete({
    where: {
      id: input.id,
    },
  });

  return "Todo has been deleted";
}
