"use server";

import { refresh } from "next/cache";
import { updateTodoItem, createTodoItem } from "../helpers/api";

export async function toggleUpdateTodo(id: string, completed: boolean) {
  await updateTodoItem(id, !completed);
  refresh();
}

export async function toggleCreateTodo(description: string) {
  await createTodoItem(description);
  refresh();
}
