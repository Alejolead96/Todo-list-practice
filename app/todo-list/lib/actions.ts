"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const toggleUpdateTodo = async (
  id: string,
  completed: boolean
): Promise<void> => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed,
    },
  });
  revalidatePath("/todo-list");
};

export const toggleCreateTodo = async (description: string): Promise<void> => {
  await prisma.todo.create({
    data: {
      description,
      completed: false,
    },
  });
  revalidatePath("/todo-list");
};

export const toggleDeleteAllTodos = async (): Promise<void> => {
  await prisma.todo.deleteMany({
    where: {
      completed: true,
    },
  });
  revalidatePath("/todo-list");
};
