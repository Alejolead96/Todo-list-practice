"use client";

import { useRouter } from "next/navigation";
import { toggleDeleteAllTodos } from "../lib/actions";

export const ButtonDelete = () => {
/*   const router = useRouter(); */

  const handleDelete = async () => {
    await toggleDeleteAllTodos();
/*     router.refresh(); */
  };

  return (
    <button
      onClick={() => handleDelete()}
      className="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer"
    >
      Clear Completed
    </button>
  );
};
