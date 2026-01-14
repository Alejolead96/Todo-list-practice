import { GetResponseList } from "../interfaces/item";

export const getTodoItems = async () => {
  const response: GetResponseList = await fetch(
    "http://localhost:3000/api/todos",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  return response.data;
};

export const updateTodoItem = async (id: string, completed: boolean) => {
  await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed,
    }),
  });
};

export const createTodoItem = async (description: string) => {
  await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description,
    }),
  });
};

export const deleteItemsTodo = async () => {
  await fetch("http://localhost:3000/api/todos", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
