"use client";

import { useRouter } from "next/navigation";
import { MdArrowForwardIos } from "react-icons/md";
import { Item } from "../interfaces/item";
import { updateTodoItem } from "../helpers/api";

const item = ({ id, description, completed }: Item) => {
  const router = useRouter();

  const handleUpdate = async (id: string, completed: boolean) => {
    await updateTodoItem(id, !completed);
    router.refresh();
  };

  return (
    <div
      className={`flex items-center gap-2 border rounded-full p-1 pr-3 text-sm font-medium  transition 
        ${
          completed
            ? "border-red-200 text-red-500 hover:bg-red-100 bg-red-50"
            : "border-sky-200 text-sky-500 hover:bg-sky-100 bg-sky-50"
        }`}
    >
      <button
        onClick={() => handleUpdate(id, completed)}
        className={`${
          completed ? "bg-red-600" : "bg-sky-600"
        } text-white text-xs px-3 py-1 rounded-full cursor-pointer`}
      >
        {completed ? "DONE" : "ACTIVE"}
      </button>

      <p className="flex items-center gap-1">
        <span>{description}</span>
        <MdArrowForwardIos className="mt-0.5 size-3" />
      </p>
    </div>
  );
};

export default item;
