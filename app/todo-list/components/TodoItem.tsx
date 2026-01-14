"use client";
import { startTransition, useOptimistic } from "react";

import { MdArrowForwardIos } from "react-icons/md";

interface Props {
  item: {
    id: string;
    description: string;
    completed: boolean;
  };
  toggleUpdateTodo: (id: string, completed: boolean) => Promise<void>;
}

const TodoItem = ({ item, toggleUpdateTodo }: Props) => {
  const [itemState, setItemState] = useOptimistic(
    item,
    (state, newCompletedValue: boolean) => ({
      ...state,
      completed: newCompletedValue,
    })
  );

  const handleUpdate = async () => {
    const prevCompleted = itemState.completed;
    const nextCompleted = !prevCompleted;

    startTransition(() => setItemState(nextCompleted));

    try {
      await toggleUpdateTodo(itemState.id, nextCompleted);
    } catch (error) {
      startTransition(() => setItemState(prevCompleted));
    }
  };

  return (
    <div
      className={`flex items-center gap-2 border rounded-full p-1 pr-3 text-sm font-medium  transition 
        ${
          itemState.completed
            ? "border-red-200 text-red-500 hover:bg-red-100 bg-red-50"
            : "border-sky-200 text-sky-500 hover:bg-sky-100 bg-sky-50"
        }`}
    >
      <button
        onClick={() => handleUpdate()}
        className={`${
          itemState.completed ? "bg-red-600" : "bg-sky-600"
        } text-white text-xs px-3 py-1 rounded-full cursor-pointer`}
      >
        {itemState.completed ? "DONE" : "ACTIVE"}
      </button>

      <p className="flex items-center gap-1">
        <span>{itemState.description}</span>
        <MdArrowForwardIos className="mt-0.5 size-3" />
      </p>
    </div>
  );
};

export default TodoItem;
