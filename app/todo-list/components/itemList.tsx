import prisma from "@/lib/prisma";
import TodoItem from "./TodoItem";
import { ButtonDelete, Input, toggleUpdateTodo } from "..";

export const ItemList = async () => {
  const items = await prisma.todo.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center my-6">
        <ButtonDelete />
        <Input />
      </div>
      <div className="flex items-center flex-wrap gap-2">
        {items.length > 0 &&
          items.map((item) => (
            <TodoItem
              key={item.id}
              item={{
                id: item.id,
                description: item.description,
                completed: item.completed,
              }}
              toggleUpdateTodo={toggleUpdateTodo}
            />
          ))}
      </div>
    </div>
  );
};
