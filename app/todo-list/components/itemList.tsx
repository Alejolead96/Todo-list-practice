"use server";

import { getTodoItems } from "../helpers/api";
import Item from "./item";

export const ItemList = async () => {
  const items = await getTodoItems();

  return (
    <div className="flex items-center flex-wrap gap-2">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};
